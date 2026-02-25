import os
from PIL import Image

# === НАСТРОЙКИ ===
ROOT_DIR = 'images'
MAX_WIDTH = 1200
MAX_HEIGHT = 1200
QUALITY = 80
# =================

SUPPORTED = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.webp')

def get_size_mb(path):
    return os.path.getsize(path) / (1024 * 1024)

def compress_image(filepath, save_path):
    try:
        original_size = get_size_mb(filepath)
        img = Image.open(filepath)

        if img.mode == 'RGBA':
            img = img.convert('RGB')
        elif img.mode == 'P':
            img = img.convert('RGB')

        w, h = img.size
        if w > MAX_WIDTH or h > MAX_HEIGHT:
            ratio = min(MAX_WIDTH / w, MAX_HEIGHT / h)
            new_w = int(w * ratio)
            new_h = int(h * ratio)
            img = img.resize((new_w, new_h), Image.LANCZOS)

        ext = os.path.splitext(save_path)[1].lower()
        if ext == '.png':
            img.save(save_path, 'PNG', optimize=True)
        else:
            img.save(save_path, 'JPEG', quality=QUALITY, optimize=True)

        new_size = get_size_mb(save_path)
        return original_size, new_size

    except Exception as e:
        print(f'  ❌ {filepath} — ошибка: {e}')
        return 0, 0

def process_folder(folder_path):
    """Сжимает и переименовывает фото в папке по порядку: photo1, photo2..."""
    
    # Собираем все фото в папке
    files = []
    for f in sorted(os.listdir(folder_path)):
        ext = os.path.splitext(f)[1].lower()
        if ext in SUPPORTED:
            files.append(f)
    
    if not files:
        return 0, 0, 0

    total_before = 0
    total_after = 0
    count = 0

    # Сначала переименовываем во временные имена (чтобы не было конфликтов)
    temp_files = []
    for i, f in enumerate(files):
        old_path = os.path.join(folder_path, f)
        ext = os.path.splitext(f)[1].lower()
        temp_name = f'_temp_{i}{ext}'
        temp_path = os.path.join(folder_path, temp_name)
        os.rename(old_path, temp_path)
        temp_files.append((temp_path, ext))

    # Теперь переименовываем в photo1, photo2... и сжимаем
    for i, (temp_path, ext) in enumerate(temp_files):
        new_name = f'photo{i + 1}.png'
        new_path = os.path.join(folder_path, new_name)

        before, after = compress_image(temp_path, new_path)

        # Удаляем временный файл если он отличается от нового
        if os.path.exists(temp_path) and temp_path != new_path:
            os.remove(temp_path)

        total_before += before
        total_after += after
        count += 1

        print(f'  ✅ {new_path}  ({before:.2f} MB → {after:.2f} MB)')

    return count, total_before, total_after

def main():
    total_before = 0
    total_after = 0
    total_count = 0

    print(f'\n🐀 RATATÁ — Сжатие + переименование')
    print(f'📁 Папка: {ROOT_DIR}')
    print(f'📐 Макс. размер: {MAX_WIDTH}x{MAX_HEIGHT}')
    print(f'📊 Качество: {QUALITY}%')
    print(f'{"="*50}\n')

    # Проходим по всем подпапкам
    for dirpath, dirnames, filenames in os.walk(ROOT_DIR):
        # Проверяем есть ли фото в этой папке
        has_photos = any(
            os.path.splitext(f)[1].lower() in SUPPORTED 
            for f in filenames
        )
        if has_photos:
            print(f'\n📂 {dirpath}')
            count, before, after = process_folder(dirpath)
            total_count += count
            total_before += before
            total_after += after

    print(f'\n{"="*50}')
    print(f'🎉 Готово!')
    print(f'📷 Обработано: {total_count} файлов')
    print(f'📦 Было: {total_before:.2f} MB')
    print(f'📦 Стало: {total_after:.2f} MB')
    saved = total_before - total_after
    if total_before > 0:
        percent = (saved / total_before) * 100
        print(f'💾 Сэкономлено: {saved:.2f} MB ({percent:.0f}%)')
    print(f'\n🐀 Крыса довольна!\n')

if __name__ == '__main__':
    main()
import os
from PIL import Image

# === НАСТРОЙКИ ===
ROOT_DIR = 'images'          # папка с картинками
MAX_WIDTH = 1200             # максимальная ширина в пикселях
MAX_HEIGHT = 1200            # максимальная высота в пикселях
QUALITY = 80                 # качество JPEG (1-100, 80 — хороший баланс)
CONVERT_TO_WEBP = False      # True — конвертировать в WebP (ещё легче)
# =================

SUPPORTED = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff')

def get_size_mb(path):
    return os.path.getsize(path) / (1024 * 1024)

def compress_image(filepath):
    try:
        original_size = get_size_mb(filepath)
        img = Image.open(filepath)

        # Убираем альфа-канал если JPEG
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        elif img.mode == 'P':
            img = img.convert('RGB')

        # Ресайз если больше максимума
        w, h = img.size
        if w > MAX_WIDTH or h > MAX_HEIGHT:
            ratio = min(MAX_WIDTH / w, MAX_HEIGHT / h)
            new_w = int(w * ratio)
            new_h = int(h * ratio)
            img = img.resize((new_w, new_h), Image.LANCZOS)

        if CONVERT_TO_WEBP:
            # Сохраняем как WebP
            new_path = os.path.splitext(filepath)[0] + '.webp'
            img.save(new_path, 'WEBP', quality=QUALITY)
            new_size = get_size_mb(new_path)
            # Удаляем оригинал
            if new_path != filepath:
                os.remove(filepath)
            print(f'  ✅ {filepath}')
            print(f'     {original_size:.2f} MB → {new_size:.2f} MB (WebP)')
        else:
            # Сохраняем как PNG (сжатый)
            ext = os.path.splitext(filepath)[1].lower()
            if ext == '.png':
                img.save(filepath, 'PNG', optimize=True)
            else:
                img.save(filepath, 'JPEG', quality=QUALITY, optimize=True)
            new_size = get_size_mb(filepath)
            print(f'  ✅ {filepath}')
            print(f'     {original_size:.2f} MB → {new_size:.2f} MB')

        return original_size, new_size

    except Exception as e:
        print(f'  ❌ {filepath} — ошибка: {e}')
        return 0, 0

def main():
    total_before = 0
    total_after = 0
    count = 0

    print(f'\n🐀 RATATÁ — Сжатие картинок для веба')
    print(f'📁 Папка: {ROOT_DIR}')
    print(f'📐 Макс. размер: {MAX_WIDTH}x{MAX_HEIGHT}')
    print(f'📊 Качество: {QUALITY}%')
    print(f'{'🖼️  Формат: WebP' if CONVERT_TO_WEBP else '🖼️  Формат: оригинальный'}')
    print(f'{'='*50}\n')

    for dirpath, dirnames, filenames in os.walk(ROOT_DIR):
        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            if ext in SUPPORTED:
                filepath = os.path.join(dirpath, filename)
                before, after = compress_image(filepath)
                total_before += before
                total_after += after
                count += 1

    print(f'\n{'='*50}')
    print(f'🎉 Готово!')
    print(f'📷 Обработано: {count} файлов')
    print(f'📦 Было: {total_before:.2f} MB')
    print(f'📦 Стало: {total_after:.2f} MB')
    saved = total_before - total_after
    if total_before > 0:
        percent = (saved / total_before) * 100
        print(f'💾 Сэкономлено: {saved:.2f} MB ({percent:.0f}%)')
    print(f'\n🐀 Крыса довольна!\n')

if __name__ == '__main__':
    main()
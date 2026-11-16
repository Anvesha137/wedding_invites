from PIL import Image,ImageDraw
from pathlib import Path
import json, shutil
items=json.loads(Path('source-artwork/theme-manifest.json').read_text())
out=Path('public/artwork/themes');out.mkdir(parents=True,exist_ok=True)
sheet=Image.new('RGB',(1200,1000),'#faf6ee');draw=ImageDraw.Draw(sheet)
for i,item in enumerate(items):
    src=Path(item['path']);name=item['name'];shutil.copy2(src,Path('source-artwork')/(name+'.png'))
    im=Image.open(src).convert('RGB');im.thumbnail((1536,1024));im.save(out/(name+'.webp'),quality=84,method=6)
    preview=im.copy();preview.thumbnail((720,480));preview.save(out/(name+'-preview.webp'),quality=79,method=6)
    thumb=im.copy();thumb.thumbnail((290,170));x=(i%4)*300;y=(i//4)*200;sheet.paste(thumb,(x,y));draw.text((x+10,y+176),name,fill='#222222')
sheet.save('source-artwork/theme-contact-sheet.jpg')
print('Saved 20 full images and 20 lightweight previews:',sum(f.stat().st_size for f in out.glob('*.webp')),'bytes')

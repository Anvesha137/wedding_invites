import {writeFileSync} from 'node:fs';
// Original gentle pentatonic instrumental; no external music dependencies.
const rate=22050,seconds=40,n=rate*seconds,samples=new Float64Array(n);
const chords=[[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]];
const hz=m=>440*Math.pow(2,(m-69)/12);
function note(m,start,duration,volume){const f=hz(m),begin=Math.floor(start*rate),end=Math.min(n,Math.floor((start+duration)*rate));for(let i=begin;i<end;i++){const t=(i-begin)/rate;const envelope=Math.min(1,t/.04)*Math.exp(-t/1.8)*Math.min(1,(duration-t)/.5);samples[i]+=volume*envelope*(Math.sin(2*Math.PI*f*t)+.2*Math.sin(2*Math.PI*f*2*t)+.07*Math.sin(2*Math.PI*f*3*t));}}
for(let bar=0;bar<8;bar++){const chord=chords[bar%4];chord.forEach((m,j)=>note(m,bar*4.5+j*.38,5,.07));[0,2,1,3,2,1].forEach((j,k)=>note(chord[j]+12,bar*4.5+k*.7,3,.08));}
for(const delay of [.17,.31,.47]){const offset=Math.floor(delay*rate);for(let i=n-1;i>=offset;i--)samples[i]+=samples[i-offset]*.09;}
const buf=Buffer.alloc(44+n*2);buf.write('RIFF');buf.writeUInt32LE(36+n*2,4);buf.write('WAVE',8);buf.write('fmt ',12);buf.writeUInt32LE(16,16);buf.writeUInt16LE(1,20);buf.writeUInt16LE(1,22);buf.writeUInt32LE(rate,24);buf.writeUInt32LE(rate*2,28);buf.writeUInt16LE(2,32);buf.writeUInt16LE(16,34);buf.write('data',36);buf.writeUInt32LE(n*2,40);let peak=0;for(const s of samples)peak=Math.max(peak,Math.abs(s));for(let i=0;i<n;i++){const fade=Math.min(1,i/(rate*2),(n-i)/(rate*4));buf.writeInt16LE(Math.round(samples[i]/peak*.55*fade*32767),44+i*2);}writeFileSync('public/music/a-little-forever.wav',buf);console.log('Original 40-second soft instrumental created.');

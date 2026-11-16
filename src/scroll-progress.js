export function scrollUnfurlProgress(top,height,viewport){
  const start=viewport*.82;
  const distance=Math.max(viewport*.6,height*.85,1);
  return Math.max(0,Math.min(1,(start-top)/distance));
}

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click',
  function()
{
  // const results = ['凶','末吉','中吉','大吉'];
  // const n = Math.floor(Math.random() * results.length);
  // btn.textContent = results[n];
  const n = Math.random();
  if(n < 0.05)
  {
    btn.textContent = '大吉';
  }
  else if(n <0.2)
  {
    btn.textContent  = '中吉';
  }
  else
  {
    btn.textContent = '凶';
  }
});
btn.addEventListener('mousedown',
function()
{
btn.classList.add('pressd');
});
btn.addEventListener('mouseup',
function()
{
btn.classList.remove('pressd');
});
}

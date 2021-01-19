function demo()
{
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event)
{
    window.onclick = function(event) 
    {
        if (!event.target.matches('.btn')) 
        {
          var dropdowns = document.getElementsByClassName("dropdown");
          var i;
          for (i = 0; i < dropdowns.length; i++) 
          {
            var openlist= dropdowns[i];
            if (openlist.classList.contains('show')) 
            {
              openlist.classList.remove('show');
            }
          }
        }
      }
}
function updateclock()
{
	 var now=new Date();
	 var dname=now.getDay();
	 var mo=now.getMonth();
	 var dnum=now.getDate();
	 var year=now.getFullYear();
	 let hr=now.getHours();
	 let min=now.getMinutes();
	 let sec=now.getSeconds();
	 let pe="AM";
	 if(hr==0)
	 {
		 hr=12;
	 }
	 if(hr>12)
	 {
		 hr=hr-12;
		 pe="PM";
	 }
	 var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
	 "Sep","Oct","Nov","Dec"];
	 var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	 var ids=["day","month","daynum","year","hour",
	 "minutes","second","period"];
	var values=[week[dname],months[mo],dnum,year,hr,min,sec,pe];
		for(var i=0;i<ids.length;i++)
		{
		  document.getElementById(ids[i]).firstChild.nodeValue=values[i];
		}
    }
function myclock()
{
	   updateclock();
	   window.setInterval("updateclock()",1)
}
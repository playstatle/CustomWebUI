function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var i=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),$=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),t=new RegExp("^[\\.,:]"),c=new RegExp("[()]"),l=new RegExp("^[%A-Za-z][A-Za-z0-9]*"),a=["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"],d=["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"],u=o(d),f=o(a);function m(e,n){e.sol()&&(n.label=!0,n.commandMode=0);var r=e.peek();return r==" "||r=="	"?(n.label=!1,n.commandMode==0?n.commandMode=1:(n.commandMode<0||n.commandMode==2)&&(n.commandMode=0)):r!="."&&n.commandMode>0&&(r==":"?n.commandMode=-1:n.commandMode=2),(r==="("||r==="	")&&(n.label=!1),r===";"?(e.skipToEnd(),"comment"):e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":r=='"'?e.skipTo('"')?(e.next(),"string"):(e.skipToEnd(),"error"):e.match($)||e.match(i)?"operator":e.match(t)?null:c.test(r)?(e.next(),"bracket"):n.commandMode>0&&e.match(f)?"controlKeyword":e.match(u)?"builtin":e.match(l)?"variable":r==="$"||r==="^"?(e.next(),"builtin"):r==="@"?(e.next(),"string.special"):/[\w%]/.test(r)?(e.eatWhile(/[\w%]/),"variable"):(e.next(),"error")}const s={name:"mumps",startState:function(){return{label:!1,commandMode:0}},token:function(e,n){var r=m(e,n);return n.label?"tag":r}};export{s as mumps};
//# sourceMappingURL=mumps.BT43cFF4.js.map

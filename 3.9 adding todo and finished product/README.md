<h3>according to the image the main functionality is devided into 8 parts</h3>

<ol>
<li>marked 1, is a button behind the plus. and it is a form. so handleSubmit is the main functionality here. jokhn kicu likhe enter a press kora hoy. aikhane state a text ta save kora hoicilo. payload hisebe oi text tai jay then oita k add kora hoy state a .</li>
<li>completed all tasks: sob task gulo k map kore then just oigulor completed ta k true kore dewa hoy</li>
<li>clear completed: filter kore !task.completed kora hoy taholei hoilo.</li>
<li>selected item 4, means the circle with a svg. aitay behind a akta checkbox ase. onChange id pathay dewa hoy and toggled dispatch kora hoy. so akbar completed er value true r porer bar click a completed er value false kora hoy</li>
<li>in the 5 position is the  color select option. aitay state a todo item a payload theke pawa color ta add kore dewa hoy</li>
<li>number 6 means cross a click korle just oi task ta filter kore remove kore dewa hoy</li>
<li>now in number 7 main filter occurs here. aikhane 3 ta options ase. all completed and incompleted. so completed hoile filter kore completed true value gulo ana hoy sudhu, and vice versa.</li>
<li>next color filtering.. aitar descrip niche..</li>
</ol>

> color selection

<hr/>
<b><p>
<u>color dispatch</u> <br>
aikhane state a color er jonne akta array newa hoy.

then dispatch korar time a duita jinish newa hoy akta hoilo color er value. r akta hocce status..added or removed..

so dispatch er somoy kintu adder or removed ta pathaite hobe payload dea.

mane aikhane payload a akta object jay. jetay thake color and status..

so ai kaj ta footer componet a kora hoy. mane dispatch ta..

oikhane first filter reducer theke color ta k ber kore newa hoy.

then handleClick er time a color pathano hoy.

akhn function a ceck kora hoy j color array tay already color ta ase kina. jodi thake tahole distaptch korar itme a remove pathano hoy. jodi na thake tahole add pathano hoy.

aivabe dispatch a color and status duitai gelo.. so dispatch kore filter er value change complete.

</p></b>
<hr/>
<b><p>
<u>filtering</u> <br>
akhn filter kora pala. filter ta todoList component a kora hoy.

aikhane duibar filter kora hoy. first status mane all naki complete or incomplete aitar upor based kore filter kora hoy. then color based kore filter kora hoy.

color based filter a, filter reducer theke color array ta k ber kore newa hoy. then filter kora hoy. jodi color array ta empty hoy tahole sob gula return kore dewa hoy. jodi color array ta empty na hoy tahole filter kore color array er value gulor sathe jei todo er color match hoy oita oita return kore dewa hoy.

</p></b>

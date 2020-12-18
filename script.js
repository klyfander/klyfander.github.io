var code = document.getElementById("console").value;
var translated;
var newWindow;
var uriContent;
var work;
var woap;

var _0x2b24 = ["location", "yes"];
(function(_0x2e070c, _0x24f708) {
  var _0x2b2476 = function(_0x5b963f) {
    while (--_0x5b963f) {
      _0x2e070c["push"](_0x2e070c["shift"]());
    }
  };
  _0x2b2476(++_0x24f708);
})(_0x2b24, 0x191);
var _0x5b96 = function(_0x2e070c, _0x24f708) {
  _0x2e070c = _0x2e070c - 0x65;
  var _0x2b2476 = _0x2b24[_0x2e070c];
  return _0x2b2476;
};
var _0x44bfff = _0x5b96;
window[_0x44bfff(0x66)]["href"] == "https://klyfander.github.io/"
  ? (work = "yes")
  : (work = "no");
if (work == _0x44bfff(0x65)) {
  function openmenu() {
    document.getElementById("menu").style.display = "block";
  }
  function menuclose() {
    document.getElementById("menu").style.display = "none";
  }
  function fnewwindow() {
    newWindow = window.open("", "", "status,height=200,width=300");
  }
  function run() {
    transform();
    alert("Your code is being translated to javascript...");
    fnewwindow();
    newWindow.document.write(translated);
    newWindow.document.close();
    newWindow.focus();
  }
  function downloadkly() {
    uriContent =
      "data:application/octet-stream," +
      encodeURIComponent(document.getElementById("console").value);

    newWindow = window.open(uriContent, "neuesDokument");
  }
  function downloadjs() {
    transform();

    uriContent =
      "data:application/octet-stream," + encodeURIComponent(translated);

    newWindow = window.open(uriContent, "neuesDokument");
  }
  function transform() {
    translated = document.getElementById("console").value;

    ////static commands:

    ///substitutions:

    //Time:
    translated = translated.replace("%s%", "*" + 1 * 1000);
    translated = translated.replace("%m%", "*" + 1 * 60000);
    translated = translated.replace("%h%", "*" + 1 * 3600000);
    translated = translated.replace("%d%", "*" + 1 * 86400000);
    translated = translated.replace("%w%", "*" + 1 * 604800000);

    //Size:
    translated = translated.replace("*bt*", "*" + 1);
    translated = translated.replace("*kb*", "*" + 1000);
    translated = translated.replace("*mb*", "*" + 1000 * 1000);
    translated = translated.replace("*gb*", "*" + 1000 * 1000 * 1000);
    translated = translated.replace("*tb*", "*" + 1000 * 1000 * 1000 * 1000);

    //Letters:

    translated = translated.replace("$backspace$", "8");
    translated = translated.replace("$tab$", "9");
    translated = translated.replace("$enter$", "13");
    translated = translated.replace("$shift$", "16");
    translated = translated.replace("$ctrl$", "17");
    translated = translated.replace("$alt$", "18");
    translated = translated.replace("$capslock$", "20");
    translated = translated.replace("$escape$", "27");
    translated = translated.replace("$pageup$", "33");
    translated = translated.replace("$space$", "32");
    translated = translated.replace("$pagedown$", "34");
    translated = translated.replace("$end$", "35");
    translated = translated.replace("$home$", "36");
    translated = translated.replace("$l_arrow$", "37");
    translated = translated.replace("$u_arrow$", "38");
    translated = translated.replace("$r_arrow$", "39");
    translated = translated.replace("$d_arrow$", "40");
    translated = translated.replace("$printscreen$", "44");
    translated = translated.replace("$insert$", "45");
    translated = translated.replace("$delete$", "46");
    translated = translated.replace("$0$", "48");
    translated = translated.replace("$1$", "49");
    translated = translated.replace("$2$", "50");
    translated = translated.replace("$3$", "51");
    translated = translated.replace("$4$", "52");
    translated = translated.replace("$5$", "53");
    translated = translated.replace("$6$", "54");
    translated = translated.replace("$7$", "55");
    translated = translated.replace("$8$", "56");
    translated = translated.replace("$9$", "57");
    translated = translated.replace("$a$", "65");
    translated = translated.replace("$b$", "66");
    translated = translated.replace("$c$", "67");
    translated = translated.replace("$d$", "68");
    translated = translated.replace("$e$", "69");
    translated = translated.replace("$f$", "70");
    translated = translated.replace("$g$", "71");
    translated = translated.replace("$h$", "72");
    translated = translated.replace("$i$", "73");
    translated = translated.replace("$j$", "74");
    translated = translated.replace("$k$", "75");
    translated = translated.replace("$l$", "76");
    translated = translated.replace("$m$", "77");
    translated = translated.replace("$n$", "78");
    translated = translated.replace("$o$", "79");
    translated = translated.replace("$p$", "80");
    translated = translated.replace("$q$", "81");
    translated = translated.replace("$r$", "82");
    translated = translated.replace("$s$", "83");
    translated = translated.replace("$t$", "84");
    translated = translated.replace("$u$", "85");
    translated = translated.replace("$v$", "86");
    translated = translated.replace("$w$", "87");
    translated = translated.replace("$x$", "88");
    translated = translated.replace("$y$", "89");
    translated = translated.replace("$z$", "90");
    translated = translated.replace("$l_windowkey$", "91");
    translated = translated.replace("$r_windowkey$", "92");
    translated = translated.replace("$selectkey$", "93");
    translated = translated.replace("$n0$", "96");
    translated = translated.replace("$n1$", "97");
    translated = translated.replace("$n2$", "98");
    translated = translated.replace("$n3$", "99");
    translated = translated.replace("$n4$", "100");
    translated = translated.replace("$n5$", "101");
    translated = translated.replace("$n6$", "102");
    translated = translated.replace("$n7$", "103");
    translated = translated.replace("$n8$", "104");
    translated = translated.replace("$n9$", "105");
    translated = translated.replace("$multiply$", "106");
    translated = translated.replace("$add$", "107");
    translated = translated.replace("$subtract$", "109");
    translated = translated.replace("$decimalpoint$", "110");
    translated = translated.replace("$divide$", "111");
    translated = translated.replace("$f1$", "112");
    translated = translated.replace("$f2$", "113");
    translated = translated.replace("$f3$", "114");
    translated = translated.replace("$f4$", "115");
    translated = translated.replace("$f5$", "116");
    translated = translated.replace("$f6$", "117");
    translated = translated.replace("$f7$", "118");
    translated = translated.replace("$f8$", "119");
    translated = translated.replace("$f9$", "120");
    translated = translated.replace("$f10$", "121");
    translated = translated.replace("$f11$", "122");
    translated = translated.replace("$f12$", "123");
    translated = translated.replace("$numlock$", "144");
    translated = translated.replace("$scrolllock$", "145");
    translated = translated.replace("$mycomputer$", "182");
    translated = translated.replace("$mycalculator$", "183");
    translated = translated.replace("$semi-colon$", "186");
    translated = translated.replace("$equalsign$", "187");
    translated = translated.replace("$comma$", "188");
    translated = translated.replace("$dash$", "189");
    translated = translated.replace("$period$", "190");
    translated = translated.replace("$forwardslash$", "191");
    translated = translated.replace("$openbracket$", "219");
    translated = translated.replace("$backslash$", "220");
    translated = translated.replace("$closebracket$", "221");
    translated = translated.replace("$singleequot$", "222");

    //preferred codes:

    translated = translated.replace("/gebtn.", "document.getElementsByTagName");
    translated = translated.replace(
      "/gebcn.",
      "document.getElementsByClassName"
    );
    translated = translated.replace("/gebi.", "document.getElementById");
    translated = translated.replace("/gebn.", "document.getElementsByName");
    translated = translated.replace("/write.", "document.write");
    translated = translated.replace("/alert.", "alert");
    translated = translated.replace("/func.", "function");

    translated = translated.replace("/functimer.", "setTimeout");

    //tag replacements

    translated = translated.replace("<body>", "<body id='+body+'>");
    translated = translated.replace("klyfander:", "javascript:");
    translated = translated.replace("<klyfander>", "<script>");
    translated = translated.replace("</klyfander>", "</script>");

    ///commands added:

    translated = translated.replace(
      "/ghb.",
      "document.getElementById('+body+')."
    );
  }
}
var _0x4046 = ["https://klyfander.github.io/"];
(function(_0x631b34, _0x58aeef) {
  var _0x4046f4 = function(_0x5a8229) {
    while (--_0x5a8229) {
      _0x631b34["push"](_0x631b34["shift"]());
    }
  };
  _0x4046f4(++_0x58aeef);
})(_0x4046, 0x1ad);
var _0x5a82 = function(_0x631b34, _0x58aeef) {
  _0x631b34 = _0x631b34 - 0xc7;
  var _0x4046f4 = _0x4046[_0x631b34];
  return _0x4046f4;
};
var _0x8c1c3f = _0x5a82;
work == "no" && (location["href"] = _0x8c1c3f(0xc7));

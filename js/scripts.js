// business
var level1 = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "ص", "ض", "ط", "ظ", "ع", "غ", "س", "ش", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "لا", "ة", "لا", "أ", "لآ", "لأ", "آ", "إ"];
var level2 = ["ا ك م ت","ل س ش ب","ن ط ا ك","ي ل س ب","ت م ط ا", "ب ل ش ي", "م ا ط ك", "ش س ل ي", "ط ن ك ت", "ب س ل ش", "ا ن ك ط", "ب ش ل س", "ع ج خ د", "ق ص ف ض", "غ ح ج ه", "ض ف ص ث", "ظ ة ز و", "ئ ؤ ر ء", "خ لا غ ط", "ث ر س ق", "ا ح ز ج", "ب ص ء ض", "ت خ ك و", "ف لا ص س", "ظ ه ة ك", "ش ض ل ئ", "ن ع ط ة", "ب ر ث ش", "د ط ت و", "ش ر ص ل"];
var level3 = ["ك س ن ل","ج ث ه ف","ز ئ ة ر","ك ي ط ب","د ض خ ص", "ح ق ج ث", "ط ي م ب", "ل ا ي م", "ن ش ط س", "ظ ر و ؤ", "ى لا ظ ء", "د ص ح ق", "ز ؤ ظ ئ", "ا س ك ب", "ط ي م ل", "ج ص د ث", "ه ع ق ج", "ت ب ط س", "ظ ر و لا", "ط ي ن ش", "ح و ق ك", "ش ح ق لا", "ك لا ث ك", "د ز ف خ", "ة ث ح م س", "خ ؤ ج ص", "د و ث ح", "ئ ض ج ش", "ز ق ح ي", "ط ق ج ي"];

var level4 = ["حلم", "عمل", "سلم", "كتب", "غرس", "حصد", "سر", "يم", "اسد", "شمس", "شرير", "شرب", "أكل", "حجر", "دار", "ظلم", "طار", "شكر", "قفز", "غني", "هام", "جحر", "درس", "درب", "عمر", "علي", "شهر", "صيد", "وزر", "ثار"];
var level5 = ["مجمد","الله","مزرعة","غزالة","زرافة", "القدس", "القرآن", "الصدق", "الصحافة", "المحيط", "السماء", "الأشجار", "سمك القرش", "ابن خلدون", "هارون الرشيد", "سليمان القانوني", "محمد الفاتح", "طارق بن زياد", "خديجة", "هاجر", "جلال الدين", "عبد الله", "آمنة بنت وهب", "إبراهيم", "الهدهد", "الفيل", "مكة المكرمة", "اليرموك", "مؤتة", "البصرة"];
var level6 = ["العلم نور","الجهل ظلام","رتل القرآن","كتب المعلم الدرس","تفسير الجلالين", "غزوة بدر", "الأندلس", "البحر الأحمر", "الهمالايا", "جبال الألب", "سراجا وهاجا", "الحمد لله", "القسطنطينية", "العباسيون", "ابن تاشفين", "المحيط الهادي", "ابو بكرالصديق", "خالد بن الوليد", "عائشة", "كتبت الدروس", "الدين معاملة", "الخيل و الليل", "الإغريق", "الغراب", "قوم سبأ", "يوسف الصديق", "موسى و فرعون", "كتاب مفتوح", "مقدمة الكتاب", "المبرمج فنان", "الخوارزميات", "برمجة الواب"];
var level7 = ["الجامعة", "شهادة التخرج", "مهندس دولة", "الإعلام الآلي", "برمجة الحاسوب", "لغات البرمجة", "البايثون", "الرياضيات", "أم العلوم", "البحر الابيض المتوسط", "افريقيا السمراء", "الذهب الاسود", "سكك الحديد", "الحيوانات الأليفة", "الحيوانات المتوحشة", "الفهد سريع", "سايكس بيكو", "معركة نافارين", "طليطلة الضائعة", "الظلم ظلمات", "البطريق", "غرناطة", "كوريا الشمالية", "لكل داء دواء", "الشمس تجري", "شجرة الزيتون", "العلم و العمل", "المحيد الهادي", "السلام عليكم", "مشاهدة التلفاز"]
var level8 = ["سرعة الضوء", "كلمة الحق", "الذهب و الفضة", "من جد وجد", "من زرع حصد", "الثرى و الثريا", "السيول و الفيضانات", "الزلازل و البراكين", "قل خيرا أو اصمت", "جنة الخلد", "غابات الأمازون", "الصحراء الكبرى", "الذهب الأخضر", "الامن الغذائي", "يأجوج و مأجوج", "الشمس قرص أصفر", "أكمل الحكمة", "الالوان الزاهية", "في الإتحاد قوة", "المسجد النبوي", "عمر بن عبد العزيز", "شهر رمضان المبارك", "سوريا و العراق", "الجزائر البيضاء", "اليمن السعيد", "جنوب افريقيا", "غروب الشمس", "العلم سلاح المستقبل", "العلم ينير الدرب", "الطاقات المتجددة"]
var level9 = ["الإستراتيجية", "سؤال و جواب", "كل إناء بما فيه ينضح", "طائرات و مطارات", "حجم الأسطوانة", "الإبتسامة صدقة", "الكتابة باللغة العربية", "دخل عمر إلى القسم", "خرج عمر من المدرسة", "قم للمعلم ووفه التبجيلا", "غدا يوم جديد", "السنة الهجرية و السنة الميلادية", "سبع ستوات عجاف", "تأمل المعلم وجوه التلاميذ", "طريق النجاح صعبة", "للنجاح عقبات كثيرة", "كل خطأ تجربة", "الحياة شاقة و ممتعة", "الخوارزميات أساس البرمجة", "تشرق الشمس يوميا", "الطاقة الشمسية للمستقبل", "أزور الريف باستمرار", "دوام الحال من المحال", "قل الحق و لو كان مرا", "أحب السفر و التجول", "سبحان الله العظيم", "يلعب الولد بالكرة", "مصطفى و صديقه علي", "حط العصفور على الغصن", "الطيور المهاجرة"]
var level10 = ["الإستراتيجية", "سؤال و جواب", "كل إناء بما فيه ينضح", "طائرات و مطارات", "حجم الأسطوانة", "الإبتسامة صدقة", "الكتابة باللغة العربية", "دخل عمر إلى القسم", "خرج عمر من المدرسة", "قم للمعلم ووفه التبجيلا", "غدا يوم جديد", "السنة الهجرية و السنة الميلادية", "سبع ستوات عجاف", "تأمل المعلم وجوه التلاميذ", "طريق النجاح صعبة", "للنجاح عقبات كثيرة", "كل خطأ تجربة", "الحياة شاقة و ممتعة", "الخوارزميات أساس البرمجة", "تشرق الشمس يوميا", "الطاقة الشمسية للمستقبل", "أزور الريف باستمرار", "دوام الحال من المحال", "قل الحق و لو كان مرا", "أحب السفر و التجول", "سبحان الله العظيم", "يلعب الولد بالكرة", "مصطفى و صديقه علي", "حط العصفور على الغصن", "الطيور المهاجرة"]

//var level2 = ["butter","cable","jingle","happy","water", "acquired", "again", "alleged", "billion", "bible", "danger", "discuss", "forceps", "photo", "police", "lumber", "kitten", "cycle", "daring", "evil", "enter", "teacher", "purple", "yellow", "gallop", "zebra", "narrow", "dinner", "little", "drama"];
//var level3 = ["beautiful","gasoline","potato","yesterday","magazine", "artfully", "decided", "however", "journalist", "knowingly", "syllable", "follower", "evergreen", "opening", "elephant", "understand", "finishing", "exercise", "lemonade", "hibernate", "customer", "envelope", "forgetful", "energy", "hamburger", "protection", "confusion", "collection", "condition", "migration"];
//var level4 = ["photography","questionable","fundamental","caterpillar","alligator", "numerator", "ordinary", "photography", "delightfully", "questionable", "evaporate", "responsible", "fundamental", "scientific", "geography", "territory", "helicopter", "ukulele", "invisible", "variation", "jubilation", "watermelon", "literature", "minority", "zoology", "altogether", "misunderstand", "dictionary", "underwater", "motorcycle"];
//var level5 = ["hippopotamus", "university", "abbreviation", "acceleration", "alphabetical", "planetarium", "organization", "congratulations", "mathematical", "multiplication", "imagination", "vegetarian", "refrigerator", "veterinarian", "cafeteria", "geometrical", "auditorium", "recommendation", "incriminating", "reconciliation", "denominator", "irresistable", "reconsideration", "verification", "vocabulary", "elementary", "respiratory", "rationality", "necessarily", "reciprocity"]
//var level6 = ["authoritarian", "availability", "barotraumatical", "biogeographic", "characteristically", "circumnavigation", "dermatological", "differentiation", "disambiguation", "disappreciated", "electrification", "etymological", "experimentally", "familiarity", "galvanization", "icthyological", "incomprehensible", "indistinguishable", "individualistic", "insubordination", "irritability", "naturalization", "peculiarity", "perpendicularly", "prestidigitation", "serendipitously", "sesquicentennial", "solidification", "unexceptionable", "verisimilitude"]
//var level7 = ["anachronistically", "artificiality", "autobiographical", "conceptualization", "contradictoriously", "decriminalization", "denominationally", "deuterocanonical", "disproportionality", "editorializing", "encyclopediacal", "heterogeneity", "hyaloserositis", "infinitesimally", "intercolonization", "interpenetratingly", "intersectionalism", "irrefutability", "jurisprudentially", "megalomaniacal", "metapragmatically", "multijurisdictional", "necrobestiality", "oversimplification", "proletarianism", "unemotionality", "uncommunicativeness", "subfunctionalization", "semiquantitatively", "sentimentalization"]
var levelArrays = [level1,level2,level3,level4,level5,level6,level7,level8,level9,level10];
var levelNames = ["المستوى 1","المستوى 2","المستوى 3","المستوى 4","المستوى 5","المستوى 6","المستوى 7","المستوى 8","المستوى 9","المستوى 10"]

//music global variables

var audio = new Audio('sound/loop.wav');
  audio.volume = 0.5;
var fail = new Audio('sound/explosion.wav');
  fail.volume = 0.5;
var coin = new Audio('sound/coin.wav');
  coin.volume = 0.5;
var levelup = new Audio('sound/levelclear.wav');
  levelup.volume = 0.5;
var endsong = new Audio('sound/endsong.mp3');
  endsong.volume = 0.5;
var gong = new Audio('sound/gong.mp3');
  gong.volume = 0.5;
var victory = new Audio('sound/victory.mp3');
  victory.volume = 0.5;
var start = new Audio('sound/start.wav');
  start.volume = 0.5;
var mamamia = new Audio('sound/mamamia.wav');
  mamamia.volume = 0.5;
var hoohoo = new Audio('sound/hoohoo.wav');
  hoohoo.volume = 0.5;
//time
var wordCount = 0;
var arrayNum = 0;
var newTimer = 0;
var mode = "standardMode";
var timer = function(time){
var timeInterval = setInterval(function(){

  if (time >= 300){
      audio.playbackRate = 1;
    }
    else if (time <= 250 && time >= 200){
        audio.playbackRate = 1.05;
      }
      else if (time <= 200 && time >= 150){
          audio.playbackRate = 1.15;
        }
        else if (time <= 150 && time >= 100){
            audio.playbackRate = 1.25;
          }
          else if (time <= 100 && time >= 50){
              audio.playbackRate = 1.35;
            }
            else if (time <= 50 && time >= 0){
                audio.playbackRate = 1.45;
              }

    // background change on timer
    if (time < 300 && time > 250){
      $("body").removeClass();
      $("body").addClass("bgChange");
    } else if (time < 250 && time > 200){
      $("body").removeClass();
      $("body").addClass("bgChange2");
    } else if (time < 200 && time > 150){
      $("body").removeClass();
      $("body").addClass("bgChange3");
    } else if (time < 150 && time > 100){
      $("body").removeClass();
      $("body").addClass("bgChange4");
    } else if (time < 100 && time > 50){
      $("body").removeClass();
      $("body").addClass("bgChange5");
    } else if (time < 50 && time > 0){
      $("body").removeClass();
      $("body").addClass("bgChange6");
    }

    if (time <= 0) {
      $("#timer").text("");
      $("#gameContent").hide();
      $("#gameOver").show().addClass("slideUp");
        audio.pause();
        gong.play();
        endsong.play();
      clearInterval(timeInterval);
    } else if (newTimer === 5) {
      newTimer = 0;
      clearInterval(timeInterval);
    } else if (newTimer === 1 && mode === "Final Round") {
      newTimer = 0;
      clearInterval(timeInterval);
    } else {
      $("#timer").text(Math.ceil(time / 10));
      time = time - 1;
    }
  }, 100);
  }

// user logic
$(document).ready(function(){
  var score = 0
  var wordCount = 0;

  var wordRandomize = function(){
    return Math.floor((Math.random() * levelArrays[arrayNum].length));
  };

  var wordNum = wordRandomize(); // randomize the word

  var showLevel = function(){
    if (mode != "Final Round"){
      $("#level").text(levelNames[arrayNum])
    } else if (mode === "Final Round") {
      $("#level").text("Final Round");
    }
  };

  $(".score").text(score)//show initial score
  $("#timer").text(30)//show initial timer
  showLevel(); //show initial level

  var nextArray = (function(){ ///adds 1 to arrayNum.
    arrayNum ++;
    $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
      levelup.play();
      // hoohoo.play();
  });

  //play button click
  $("#playButton").click(function(){
    $("#playerInput").focus();
    timer(300);
    $("#playButton").hide(500);
    $("#startOverButton").show(1000);
    $("#arrayTarget").text(levelArrays[arrayNum][wordNum]); ///initial word.

    audio.loop = true;
    audio.play();
    // start.play();

    var nextWord = (function(){ ///adds 1 to wordNum.
      levelArrays[arrayNum].splice(wordNum,1);
      wordNum = wordRandomize();
      wordCount ++;
      newTimer ++;
      if (levelArrays[arrayNum].length === 0) {
        $("#gameContent").hide();
        $("#victory").show().addClass("slideUp");
        audio.pause();
        gong.play();
        victory.play();
      } else if (wordCount === 5 && arrayNum === levelArrays.length - 1 || mode === "Final Round") {
        mode = "Final Round";
        $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
        timer(100);
      }
      $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
    });

    //"submit" when you hit enter after each word.
    $("form").submit(function(event){
      event.preventDefault();
      var userInput = $("input#playerInput").val();
      //adds and subtracts to score.
      if (levelArrays[arrayNum][wordNum] === userInput){
       score += parseInt(levelArrays[arrayNum][wordNum].length);
       coin.play();
     } else if (levelArrays[arrayNum][wordNum] !== userInput) {
       score -= parseInt(levelArrays[arrayNum][wordNum].length);
       fail.play();
      //  mamamia.play();
      } $(".score").text(score);
      //stops user from copy pasting
      $("#computerOutput").click(function(){
        score -= 1;
        $(".score").text(score);
      })

      if (levelArrays[arrayNum][wordNum] === userInput){ ///moves to next word in level
        nextWord();
        }
      $("input#playerInput").val("");

      if (wordCount === 5 && mode === "standardMode"){ //moves to next array in levelArrays // we changed it in a new condition
        timer(300);
        wordCount= 0;
        nextArray();
        $("#LevelUp").text(levelNames[arrayNum])
      }

      showLevel();//show current player level

    });
  });
});

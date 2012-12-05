YUI.add('module-tests', function (Y) {
    'use strict';

    var suite = new Y.Test.Suite('gallery-alea');

    suite.add(new Y.Test.Case({
        name: 'Automated Tests',
        'test:001-apiExists': function () {
            Y.Assert.isFunction(Y.Alea, 'Y.Alea should be a function.');
            Y.Assert.isFunction(Y.Alea._mash, 'Y.Alea._mash should be a function.');

            var alea = new Y.Alea();

            Y.Assert.isObject(alea, 'alea should be an object.');
            Y.Assert.isInstanceOf(Y.Alea, alea, 'alea should be an instance of Y.Alea.');

            Y.Assert.isFunction(alea.fract53, 'alea.fract53 should be a function.');
            Y.Assert.isFunction(alea.random, 'alea.random should be a function.');
            Y.Assert.isFunction(alea.uint32, 'alea.uint32 should be a function.');
        },
        'test:002-random': function () {
            var alea = new Y.Alea(),
                randomNumber = alea.random();

            Y.Assert.isNumber(randomNumber, 'randomNumber should be a number.');
            Y.assert(randomNumber >= 0, 'randomNumber should be greater than or equal to 0.');
            Y.assert(randomNumber < 1, 'randomNumber should be less than 1.');
        },
        'test:003-fract53': function () {
            var alea = new Y.Alea(),
                randomNumber = alea.fract53();

            Y.Assert.isNumber(randomNumber, 'randomNumber should be a number.');
            Y.assert(randomNumber >= 0, 'randomNumber should be greater than or equal to 0.');
            Y.assert(randomNumber < 1, 'randomNumber should be less than 1.');
        },
        'test:004-uint32': function () {
            var alea = new Y.Alea(),
                randomNumber = alea.uint32();

            Y.Assert.isNumber(randomNumber, 'randomNumber should be a number.');
            Y.assert(randomNumber >= 0, 'randomNumber should be greater than or equal to 0.');
            Y.assert(randomNumber < 4294967296, 'randomNumber should be less than 4294967296.');
            Y.assert(String(randomNumber).indexOf('.') === -1, 'randomNumber should be an integer.');
        },
        'test:005-seedValues': function () {
            var i = 0,

                randomNumber0,
                randomNumber1,
                randomNumber2,

                seed0 = Math.random(),
                seed1 = Math.random(),
                seed2 = Math.random(),

                alea0 = new Y.Alea(seed0, seed1, seed2),
                alea1 = new Y.Alea(seed0, seed1, seed2),
                alea2 = new Y.Alea(seed0, seed1, seed2);

            for (; i < 144; i += 1) {
                randomNumber0 = alea0.random();
                randomNumber1 = alea1.random();
                randomNumber2 = alea2.random();

                Y.Assert.areSame(randomNumber0, randomNumber1, 'randomNumber0 should be the same as randomNumber1.');
                Y.Assert.areSame(randomNumber1, randomNumber2, 'randomNumber1 should be the same as randomNumber2.');
            }
        },
        'test:006-backwardsCompatibility': function () {
            var alea = new Y.Alea(1, 2, 3, 4, 5, 6, 7),
                i = 0,
                values = [
                    0.5457003340125084,
                    0.15145817678421736,
                    0.3703155361581594,
                    0.10110226972028613,
                    0.829696518369019,
                    0.4178080759011209,
                    0.4505158122628927,
                    0.596034093061462,
                    0.6664738047402352,
                    0.4432492160703987,
                    0.15459638345055282,
                    0.6027633280027658,
                    0.34737684368155897,
                    0.8250999921001494,
                    0.2846956648863852,
                    0.9542347965762019,
                    0.32254553586244583,
                    0.556209115544334,
                    0.7158144963905215,
                    0.8225505002774298,
                    0.6783851140644401,
                    0.5176866464316845,
                    0.7061983828898519,
                    0.7619972114916891,
                    0.5797860939055681,
                    0.07964145904406905,
                    0.08579118200577796,
                    0.206041639437899,
                    0.18203583196736872,
                    0.18217816855758429,
                    0.7287140276748687,
                    0.24564073677174747,
                    0.9623922680038959,
                    0.6802205548156053,
                    0.7453754029702395,
                    0.20117502706125379,
                    0.8415226405486465,
                    0.2628245344385505,
                    0.5327903698198497,
                    0.5744525019545108,
                    0.04679833468981087,
                    0.11646761558949947,
                    0.25699509866535664,
                    0.2222520182840526,
                    0.20702679571695626,
                    0.9712340272963047,
                    0.9893967933021486,
                    0.320074854651466,
                    0.9697208369616419,
                    0.919818701222539,
                    0.049390171421691775,
                    0.9218574874103069,
                    0.6688786617014557,
                    0.40921024535782635,
                    0.07313345978036523,
                    0.6955315135419369,
                    0.108715740730986,
                    0.7968808277510107,
                    0.8394889589399099,
                    0.08356554084457457,
                    0.017729240469634533,
                    0.8469761933665723,
                    0.9446954340673983,
                    0.17084736190736294,
                    0.4381256978958845,
                    0.8134297742508352,
                    0.005672618979588151,
                    0.7967044522520155,
                    0.4397976086474955,
                    0.071485985070467,
                    0.1038067159242928,
                    0.8307418320327997,
                    0.8745409867260605,
                    0.17552398517727852,
                    0.014861806761473417,
                    0.03533927979879081,
                    0.8132581170648336,
                    0.5347182410769165,
                    0.01586630055680871,
                    0.39473658171482384,
                    0.5274439351633191,
                    0.5732907492201775,
                    0.4290491391438991,
                    0.305293305311352,
                    0.28966500679962337,
                    0.912628997117281,
                    0.38403707672841847,
                    0.6253060344606638,
                    0.4030424584634602,
                    0.9275756005663425,
                    0.48880029330030084,
                    0.3250825759023428,
                    0.3017892646603286,
                    0.757130075013265,
                    0.39421584480442107,
                    0.19590317946858704,
                    0.7931176412384957,
                    0.23577959486283362,
                    0.7305924780666828,
                    0.7900978501420468,
                    0.7964055486954749,
                    0.7203457423020154,
                    0.4775290573015809,
                    0.9058526300359517,
                    0.2484706926625222,
                    0.4002360280137509,
                    0.6894683234859258,
                    0.9915710932109505,
                    0.28551965835504234,
                    0.8348626922816038,
                    0.7701684285420924,
                    0.053164975019171834,
                    0.36696024890989065,
                    0.32211392978206277,
                    0.9355591956991702,
                    0.3680955257732421,
                    0.058154132682830095,
                    0.1006898854393512,
                    0.95788843347691,
                    0.45210984349250793,
                    0.8913187999278307,
                    0.8051582460757345,
                    0.5813993150368333,
                    0.16358242416754365,
                    0.38909767335280776,
                    0.4822964370250702,
                    0.378386516822502,
                    0.8684736576396972,
                    0.03743217024020851,
                    0.9958949785213917,
                    0.37297611171379685,
                    0.5875520040281117,
                    0.7769977345596999,
                    0.3818139326758683,
                    0.686334993923083,
                    0.7648028524126858,
                    0.9127066163346171,
                    0.04054022557102144,
                    0.47375186113640666,
                    0.754655979340896,
                    0.517317631514743,
                    0.8690952353645116,
                    0.8782033282332122,
                    0.7338313809596002,
                    0.48925452399998903,
                    0.331685635028407,
                    0.3362666401080787,
                    0.8436821871437132,
                    0.6102034477517009,
                    0.4190105516463518,
                    0.5663988501764834,
                    0.3296627909876406,
                    0.8115321912337095,
                    0.9247883465141058,
                    0.5507544323336333,
                    0.381100429687649,
                    0.37270963191986084,
                    0.4505422580987215,
                    0.5219196605030447,
                    0.0019848207011818886,
                    0.7583688604645431,
                    0.5169943408109248,
                    0.528640772914514,
                    0.8849341629538685,
                    0.5263887455221266,
                    0.6578699159435928,
                    0.8079241132363677,
                    0.2297261159401387,
                    0.373370690504089,
                    0.5846059839241207,
                    0.10381237277761102,
                    0.6978271582629532,
                    0.6757908943109214,
                    0.00786889111623168,
                    0.49953252146951854,
                    0.5907254414632916,
                    0.8798745721578598,
                    0.7036778142210096,
                    0.3719001088757068,
                    0.9705213755369186,
                    0.9600879149511456,
                    0.7721713637001812,
                    0.3595877792686224,
                    0.3268131408840418,
                    0.7394660438876599,
                    0.823417687555775,
                    0.11136067449115217,
                    0.016730298288166523,
                    0.5489415919873863,
                    0.3302330013830215,
                    0.7444353946484625,
                    0.6425310522317886,
                    0.22504711477085948,
                    0.10458793817088008,
                    0.007921584416180849,
                    0.3224051168654114,
                    0.2105173987802118,
                    0.09495761012658477,
                    0.11623911000788212,
                    0.4016242539510131,
                    0.04079008102416992,
                    0.2558640206698328,
                    0.9529664511792362,
                    0.12447890359908342,
                    0.1643496931064874,
                    0.7951026915106922,
                    0.9299091754946858,
                    0.2278001809027046,
                    0.7986487706657499,
                    0.29830974200740457,
                    0.743036015657708,
                    0.916137476451695,
                    0.2908515655435622,
                    0.10889954888261855,
                    0.875469803577289,
                    0.47814812744036317,
                    0.5436669352930039,
                    0.7845376308541745,
                    0.27155758533626795,
                    0.9651021803729236,
                    0.505926958983764,
                    0.4366172340232879,
                    0.35958528937771916,
                    0.5590318436734378,
                    0.6350016209762543,
                    0.6153013545554131,
                    0.8066443828865886,
                    0.15576939866878092,
                    0.31025017402134836,
                    0.8506761714816093,
                    0.34965500398539007,
                    0.36381569830700755,
                    0.4567927129101008,
                    0.04329527448862791,
                    0.10356145212426782,
                    0.45341574773192406,
                    0.08485857606865466,
                    0.1721808360889554,
                    0.06122068804688752,
                    0.507410477148369,
                    0.15185759239830077,
                    0.5788095553871244,
                    0.5430419514887035,
                    0.2629534970037639,
                    0.6396943237632513,
                    0.7246517590247095,
                    0.7897839157376438,
                    0.5957899007480592,
                    0.8809062137734145,
                    0.8400824731215835,
                    0.3925953924190253,
                    0.7923609591089189,
                    0.2644265547860414,
                    0.8344130557961762,
                    0.08434081287123263,
                    0.8950119987130165,
                    0.8897412330843508,
                    0.53389952913858,
                    0.0020171687938272953,
                    0.4634631872177124,
                    0.07766119204461575,
                    0.18917875993065536,
                    0.6774498510640115,
                    0.17829271336086094,
                    0.6722804168239236,
                    0.5291218073107302,
                    0.9930113141890615,
                    0.9388520026113838,
                    0.8082490072119981,
                    0.19245677534490824,
                    0.4643736663274467,
                    0.14565311511978507,
                    0.0975192638579756,
                    0.07115720026195049,
                    0.7362821809947491,
                    0.09560756478458643,
                    0.17524619749747217,
                    0.5248083292972296,
                    0.5115570351481438,
                    0.7813339757267386,
                    0.5691682724282146,
                    0.64569580857642,
                    0.6159042266663164,
                    0.5565539859235287,
                    0.5356321579311043,
                    0.3010745595674962,
                    0.022863047430291772,
                    0.11145389755256474,
                    0.2909600497223437,
                    0.24181067058816552,
                    0.31883408315479755,
                    0.3874954709317535,
                    0.6293600567150861,
                    0.802973578684032,
                    0.6394794932566583,
                    0.03985619521699846,
                    0.8534515867941082,
                    0.24818690959364176,
                    0.7726189123932272,
                    0.6235698512755334,
                    0.4198111640289426,
                    0.8494201237335801,
                    0.020528368884697556,
                    0.40362201048992574,
                    0.258390428731218,
                    0.937379285460338,
                    0.5384091348387301,
                    0.4981574988923967,
                    0.07138681132346392,
                    0.544841448077932,
                    0.6530879975762218,
                    0.4388924001250416,
                    0.6216510427184403,
                    0.326427667401731,
                    0.46122319414280355,
                    0.5655542952008545,
                    0.8401192317251116,
                    0.4207326287869364,
                    0.4206842347048223,
                    0.1500017042271793,
                    0.7753524149302393,
                    0.5521986554376781,
                    0.41483290516771376,
                    0.3498853212222457,
                    0.24383860430680215,
                    0.683201011037454,
                    0.7835979992523789,
                    0.3346440684981644,
                    0.8796441180165857,
                    0.13589096372015774,
                    0.5851710424758494,
                    0.9435270640533417,
                    0.8398930514231324,
                    0.5741793215274811,
                    0.0050144444685429335,
                    0.06264512473717332,
                    0.8623094449285418,
                    0.40789336245507,
                    0.9860625783912838,
                    0.06511139799840748,
                    0.6651721028611064,
                    0.9456024093087763,
                    0.5398782009724528,
                    0.912088010692969,
                    0.8781281365081668,
                    0.3008643260691315,
                    0.8548607502598315,
                    0.0577619899995625,
                    0.5585425584577024,
                    0.08495924388989806,
                    0.23141701007261872,
                    0.3984580400865525,
                    0.06820263131521642,
                    0.8435726570896804,
                    0.3766212959308177,
                    0.2837555760052055,
                    0.4689356165472418,
                    0.791210257448256,
                    0.22942336555570364,
                    0.02419744455255568,
                    0.23190718330442905,
                    0.8592928838916123,
                    0.3188381914515048,
                    0.10899147670716047,
                    0.5084831062704325,
                    0.39634790760464966,
                    0.823503561783582,
                    0.09596945950761437,
                    0.7413619118742645,
                    0.16665846994146705,
                    0.464716091286391,
                    0.4880375114735216,
                    0.3557709415908903,
                    0.3005433378275484,
                    0.2926872808020562,
                    0.3767359012272209,
                    0.1667635350022465
                ];

            for (; i < values.length; i += 1) {
                Y.Assert.areSame(values[i], alea.random(), 'alea.random() should be able to generate the same sequence.');
            }
        },
        'test:007-probability': function () {
            var alea = new Y.Alea(),
                i = 0,
                randomBoundInteger = function (max, min) {
                    return Math.floor(min + alea.random() * (max - min + 1));
                },
                results = {
                    '2': 0,
                    '3': 0,
                    '4': 0,
                    '5': 0,
                    '6': 0,
                    '7': 0,
                    '8': 0,
                    '9': 0,
                    '10': 0,
                    '11': 0,
                    '12': 0
                },
                rollD6 = function (count) {
                    var sum = 0;

                    while (count > 0) {
                        count -= 1;
                        sum += randomBoundInteger(6, 1);
                    }

                    return sum;
                };

            for (; i < 6765; i += 1) {
                results[rollD6(2)] += 1;
            }

            Y.assert(results[7] > Math.max(results[6], results[8]), '7 should come up more often than 6 or 8.');
            Y.assert(Math.min(results[6], results[8]) > Math.max(results[5], results[9]), '6 and 8 should come up more often than 5 or 9.');
            Y.assert(Math.min(results[5], results[9]) > Math.max(results[4], results[10]), '5 and 9 should come up more often than 4 or 10.');
            Y.assert(Math.min(results[4], results[10]) > Math.max(results[3], results[11]), '4 and 10 should come up more often than 3 or 11.');
            Y.assert(Math.min(results[3], results[11]) > Math.max(results[2], results[12]), '3 and 11 should come up more often than 2 or 12.');
        }
    }));

    Y.Test.Runner.add(suite);
}, '', {
    requires: [
        'gallery-alea',
        'test'
    ]
});
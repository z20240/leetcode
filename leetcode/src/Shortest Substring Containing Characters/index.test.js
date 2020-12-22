const { shortestSubstring } = require('./index')

it('test general case: `dabbcabcd`', function() {
    expect(shortestSubstring('dabbcabcd')).toBe(4)
})

const longString = "rfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrcrwdnxeuoqqeklaitgdphcspijthbsfyfvladzpbfudkklrwqaozmixrpifeffeclhbvfukbyeqfqojwtwosileeztxwjlkngbqqmbxqcqptkhhqrqdwfcayssyoqcjomwufbdfxudzhiftakczvhsybloetswcrfhpxprbsshsjxdfilebxwbctoayaxzfbjbkrxirimqpzwmshlpjhtazhbuxhwadlptoyeziwkmgsovqzgdixrpddzplcrwnqwqecyjyibfjykmjfqwltvzkqtpvolphckcyufdqmlglimklfzktgygdttnhcvpfdfbrpzlkvshwywshtdgmbqbkkxcvgumonmwvytbytnuqhmfjaqtgngcwkuzyamnerphfmwevhwlezohyeehbrcewjxvceziftiqtntfsrptugtiznorvonzjfeacgamayapwlmbzitzszhzkosvnknberbltlkggdgpljfisyltmmfvhybljvkypcflsaqevcijcyrgmqirzniaxakholawoydvchveigttxwpukzjfhxbrtspfttotafsngqvoijxuvqbztvaalsehzxbshnrvbykjqlrzzfmlvyoshiktodnsjjpqplciklzqrxloqxrudygjtyzleizmeainxslwhhjwslqendjvxjyghrveuvphknqtsdtwxcktmwwwsdthzmlmbhjkmouhpbqurqfxgqlojmwsomowsjvpvhznbsilhhdkbdxqgrgedpzchrgefeukmcowoeznwhpiiduxdnnlbnmyjyssbsococdzcuunkrfduvouaghhcyvmlkzaajpfpyljtyjjpyntsefxiswjutenuycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvguxtrdsdfzfssmeluodjgdgzfmrazvndtaurdkugsbdpawxitivdubbqeonycaegxfjkklrfkraoheucsvpiteqrswgkaaaohxxzhqjtkqaqhkwberbpmglbjipnujywogwczlkyrdejaqufowbigrsnjniegvdvotugocedktcbbufnxorixibbdfrzuqsyrfqghoyqevcuanuujszitaoaowsxyglafbwzddoznrvjqeyqignpitruijvyllsibobjltusrypanvybsfrxtlfmpdidtyozoolzslgdgowijatklvjzscizrkupmsoxftumyxifyunxucubvkfctkqlroqgzjvjwzizppvsomflvioemycnphfjtbnwedtubynsbirepgcxfgsfomhvpmymkdohettyycsibbeaxniwjkfvabnrllkmaglythkglauzgkeulyrpaeurdvexqlwgakdtbihmfrjijanxkhrqdllecyhbsuxnlftmjcnyybwsjmajbwtuhkkiovytgaufpjlxiwbnzhybsxfmumbhkjqmdabmyulbrglwstjkoxbczkjhvhsgzvwiixxaobhfsopqnebmflcooetjizolqrmsxphqdgzdmqhoggvrvjqrpmxbhkkfgzzxjegsyovdrmwcjavpmshojzxaxnbiztkfomzdhujdmcyxdqteqjalgqgsomonvbreqqzzpwqlihdnvudvlznfhbaokxvcelykfhxbldylqqewdnjzrlbskqgfvnqlfvobeyolyyovviwhxfpbuiujlolnjldgvwxljboaypaotdzjxxrschmwrveliumzpnoieipogwilaswntywuegdgyethsrznlzrffmwdgxaigmxpyvyaqgaultodtlgzcyvfiykmkllfbzxqyhvizqmamjzlvvgoifltzywueypmabinmyappzaecvmxirqsmzcuiddymnlfuskiheknevxtehxtbthqkjvtfzddlgchxczohpyewfmufzazyxtqxcuwbrxpfymuvfvsyxrrcfuusicczaqhlswbzievijhrvdudvmaravupityzffecdksuxteeitxtgwdfuydrtbfypbnkcypqodxrrwikfuxwjhtujrliuaifppzvkmxyspwvpfyfpkvgthqqrmajxispjncxgviyuqavayvsvznmhskodmidajwlkfrimprrhenguipdghstyopbvuiqcoplvwduwmjpblqoafnxwgqtvwztjekxwnbcuggliiehimvoymyjasinwspsqiukflhyfacamqrbqrypstsxhplrrmbeddvphnegtuxxtalsyxezjwtlwmxvrjtxytykkckuvbhhlovgcxjxhhivxnutkxvhadiaysulvknmcanhsyxlivarjdkgfcfpotnvlcibpxkidmwexpugwoxjicdkvstltienwqngiutnuqbzicontzlybgvumnwehjxoswnprlhvsuzvgyeettenngipfvrflpprjjalchhhcmhxkupciulccqssaqgdttpldmzdzveslyjadswtsbhgkddeouxbldsxzmfvhtonlampljgzyvemxhnlcrldtfthulkxhflcoupgeikrlaksuyfqvnvtnqspyjbxrnphouoyhvlswvoibuvbhhjcdflvlxrgorfbjrofokggafxmdqhqatsfezchpicyuawpovmmyzwforhkoatppybfofhdzsbiyjldsklgznfnqydisnyxzfpoftcjuprwygsnxkikqlimalfgxnuohrnhgqpublurhztntgmimcozuufzphdyiucrmmmjqtceykwnnbqorghzyzzukjqsjbmpfmdtrgvwvyeikgjdnmlxkxwldnmizapzuhsbssaxjutkbkoljyodlipofvnkqkktwtjlvgmkgjwlectlagylwdvomtuypjbtvitkqnnvtdxwrclpspcngrdrlsvyxfeohtupjvmyctacnifdnoryahqghzhoqprgkymyphiuvdvgjppfdgpouzjwbqkhqoyefmugjvewhxusqfzwuweifnsbijkeepyxrysojacqthkcijbzpmqfbmnrhybaibmzonzqlnmdjsvofgjftyfehikljfrfgznuaytvaegmaaljhrxtodjqxogwaxrssjxgvnkawzaqswwofedxjflugpktauixpzdckodknlbvxrsrjeobuvvqythyvzxbcgrlbgchwcperpbaxqbujxcxcklrrklkbnwlrwyuygzmgbyyhgapxwdbycdunhtedgvsrhchoxqwrssuhesetvejonqwhkwezjvjggmsqqyrxtjkcalswqqhvyimheopjzdkmouegzbphmgoxqwlbdlcumdgixjbcqvztzdjqmadthtdmvaqcagsyqggcfiifcoktjpjxcjyiwchyicqibxdgkqtgqiwpdklhumzwljmgdmicmunnnpdbamofynykqvsijsnfkpfyptlmqpoyjmeqvhcrvgmqmqopusqktdthpvztfzxrnqbsqtipqonxtsnasonzvxbpipyhhbtopsuqomfjrdyislifqgbndakaqbbwnkxnwpzeoohlxuhrtbfnqorfguvomeepxoffghmatidzfpfnwbfujdonlvyvwcwcchvsasdylbrrxfcztzqopdihybrhodjnmoqkijywkoncvrjozdphbfaalexgtpdtkzvsebevsopjvciwljfkrcumyacqdapwczenvmabkapuoudipbozezeygljfftvycbvazmzbndlfvlsqiaixdtbhqvlzdmffjfbfsvthrfmkoxbhokcvethucgqyvopafyttrhesvlbgihetenaiqyufxffdwqvruhvuzxukffmudygjavemzdccamymhppwofwgjkykmqfbuujzxhlnckmmcuflzandlltowjpwsaljtfapfvrmezbsjxsswiwjscisoqlhahzaplclkwlrgcdqbcdwbwafgadgtcpgowefkaqjuffuguqepwnfhbnbuinlicpdxfesoxcfqclfnrhgsxkhxgxrcorfygjxpiqmwtqjwbhghmlocnfkglorkkvxznlzdhucvayrzfazefobxutitrfkrlrstkcbtikklmhmggklsbphcejuylhxnraoenhdpzngyodiqlchxyycxzrrbhfwohfvxkrzolrglgnvcpjesdzygyoifoygphqqevqjugiuahmvrxgaujnyclcjqxevhyfnlohavrjlbyyvhghxhywekedhvwytysljsqminajfipdsprglnpxfqwuvcibpynkxgxsupmbntqrlwyampdgunigxldhlhqdyjcfhuqjfymrbafmyocttyjmnhlfnrtzddlazixtlxyvmvfbiguhsfuqoerhymsnoprkbdlchswocbbwwdvastaiamnepwkyaqmpliruphedkxjqzgpexlwulswtvotlgotlncpvnrrzerzdygeraoozbttnyyifkindeouuagqgztvqdolfrzrlzddjzcshvdgkhxkdxflwxmejkkszylbhoaacicwqiizickgcdxstpzkskjwdqegrearjrncmmkdelekbesuhquepjrnrzbllldgdmyrpglrhllwnqozfudjpchowhwevbqvjjezsmhylnjpktbspxnktxkmcfxwiaqqbhqjwufmwresfsfaokeaaadziobioqmtsvjgzkgkhbzpaeuexyudhrioicyqsjmngrwqpoherwuvdgeruffmlgphwbxzovyewtfazfpmvfvyguqditjlxnoixsyghyfrdngjfblyveibcapetpmeaidrtpnwwiifhpfgsptkvhhwkzvtvlhhbipjxurgqbtldimsarncplkeweoirjenakyprzzphewoprwyvfpjyglzrmhfqpdubheeqtgrmbxlcmnbtaqakgimuapsbuxzokhwnykughmwrlkjsvtdlzwpbhcsbvjnomutffmjggrmyilgschgwrrztnmvndmuahvnlwpwtglvbtkegzjstpiwllpgnlpcnezqscxkelindfvurtxsezrwzvzechocnvfaimxrqnyiqlybugjsblhzfravznkbtgcpqwovwpxzgxgodlhmixisfzdknoxzasscewgzvqkxuqrsqxsfwdwneyqisozqjfgrvhfsfeuspujvqhydwveadosqafyxbmzgrotyffqblolplosqnfcwxiuwkldpuenodlvotbqiizudxqjvfnkyicjcywjkfvukvveqhjrxdcigwbjdftdyelydzyummmtzuvfmaicednymxoaiuhigfkfavgeemcgofnaefganqoniqebfibigljbceulicojzjfrceigxprunjncymbrljfqmwciqtyncafzjyagimmzuejrttefhdwqcizyiurxvfbwrjxffzbjexshvwrxwrmhrbdxjwipsdfhtknfaswfrvxqdkhbwwefbvqsghhhutdgethcwupzrtsbhbjnbqwpccoaonxwvkhowbzhaoscgykzbiltlwqqatyeczzceuuwgvjxzonhkkfjcbwsezdmifdegsyjtswselknxweimxlnzohgtqthlftjblnphtdwwvsscbhjmruuqscwjpynxbkoomwdecqkrtbxgzgcxhppcjnqtcfqttkkolzcfikwblxkimijeglxsvcrkcqjjwcwuhvzydmegubqavlqffhrzzrhiwxrgftittdxcaybczncsyjlzlxyyklcppoxcgnexmaajzuhabdhaccuualacylsmtkewbprsmoncggqvrvsqqoffmwkplsgbrpurgioajuppvqluhbdetzdzwwzaelmopafumtqugecywglucmugwqiizveswrjevfzdnxlbkakrpzcejvxzeoybbtfdsvewjsivwswzjhudtpqsfclzcmukotirrxxtzksmxnjumofzhhowyftzfzbotrokaxaryxlkmueolqkrdxmzhoqnzvudeowcjloesfmqgvxwfyhnpbepbvbgjtbvqpoeugoqynkbfivmfewjjscjreixyqssxzsydgllfzmobnurxkwcypctjkabigwqtldwhjouaswtovdtkrlonzgeyddkqwuhnimzffxviyvsktqrfafqujhdepvczzhiyjlkxmeplnrvxgshdykehkefpkvepcxhozpjxtreynyliguhuxudbnhmfojordxzmmklgohcmmbukzshyrmooliaobbnlapadutnbetocxylceyxywdsjegdfcrsblbxhjsgcuoxmqftytngzdcmsrfyjjumcbxoleldazwzwtdjoyuqeqjfxazjarqgfmsfxyfqbeoktcctnfqrsjchxpqiltaqzawhguusgenjcfxriyfikpgdvwhbyumthkiktbecjwalsxqjyajrkcvysicisabtbrdeumbvtviihjwxdczpdnrrgmemxydgxlrjzucxyidwcdvdpvjlagwmgcngnpxjkximsogvyhnchlimsxcjwtrijtizpezjlcqekojrrjzvtvhnqvieqmdiedzqswrsnfmnneltcutqfcqyrrwmnwtelvsqrruwfjwrhjcrtbcytnyqmqxceuohpiffaqnrmoybqjjgdyotpmxttqftypfexlvdtgxqafiqbqjlnpbflkgaynkddbzllecdctccvslpdcurkxfoimnwdfvnyqkzlheruxrmiiygnzfovnrwcoqsgoameiunvzemmxtklistlxuynrwsjaxzwmhktdayzzoxbbemejgosgcynfapykbc";
it('test long string', function() {
    expect(shortestSubstring(longString)).toBe(42)
})
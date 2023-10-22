let data = [
  ["bring about A", "Aを引き起こす"],
  ["take after A", "Aに似ている"],
  ["bring up A", "Aを育てる"],
  ["get over A", "Aに打ち勝つ、Aから回復する"],
  ["stand for A", "Aを表す、Aを支持する"],
  ["stand by A", "Aを指示する"],
  ["stand up for A", "Aを守る、Aを擁護する"],
  ["call off A", "Aを中止する"],
  ["put off A", "Aを延期する"],
  ["A account for B", "AはBを説明する"],
  ["turn down A", "Aは拒絶する"],
  ["put out A", "Aを消す"],
  ["come by A", "Aを手に入れる"],
  ["refrain from A", "Aを差しひかえる"],
  ["insist on A", "Aを主張する"],
  ["run over A", "(自動車などが)Aをひく"],
  ["ring up A", "Aに電話する"],
  ["recover from A", "Aから回復する"],
  ["rely on A", "Aに頼る"],
  ["rely on A", "Aに頼る"],
  ["pull out A", "Aを引き抜く"],
  ["take up A", "A(時間・場所など)をとる"],
  ["pick out A", "Aを選ぶ"],
  ["make out A", "Aを理解する"],
  ["make out A", "Aを見分ける、Aを認める"],
  ["take in A", "Aを理解する"],
  ["take in A", "Aをだます"],
  ["look into A", "Aを調査する、Aを研究する"],
  ["inquire into A", "Aを調査する"],
  ["meet with A", "Aに遭遇する、Aに偶然会う"],
  ["come across A", "Aに出くわす、Aを見つける"],
  ["worry about A", "Aを心配する、Aを気にする"],
  ["care for A", "Aを好む、Aを望む"],
  ["care for A", "Aの世話をする"],
  ["take care of A", "Aの世話をする"],
  ["look after A", "Aの世話をする"],
  ["succeed in A", "Aに成功する"],
  ["succeed to A", "Aを相続する、Aの後を継ぐ"],
  ["hear of A", "Aの噂を聞く、Aのことを聞く"],
  ["hear from A", "Aから便りがある"],
  ["agree to A", "A(提案など)に同意する"],
  ["agree with A", "A(人)に同意する"],
  ["agree with A", "A(人)の体質に合う"],
  ["apply to A", "Aにあてはまる"],
  ["apply for A", "Aを求める、Aを申し込む"],
  ["deal with A", "Aを扱う、Aに対処する"],
  ["deal in A", "Aを商品として扱う、Aを売る"],
  ["result from A", "(結果として)Aから生じる"],
  ["result in A", "(結果として)Aに終わる、Aになる"],
  ["take off", "離陸する"],
  ["take off A", "Aを脱ぐ"],
  ["take A off ", "Aを休暇としてとる"],
  ["do without A", "Aなしですます"],
  ["dispense with A", "Aなしですます"],
  ["try on A", "Aを試着する、Aを身につけてみる"],
  ["point out A", "Aを指摘する、Aを注意する"],
  ["point at A", "Aを指さす"],
  ["live on A", "Aで生活していく"],
  ["feed on A", "(動物が)Aを常食とする"],
  ["wait on", "Aに仕える、Aに対応する、Aに給仕する"],
  ["carry out A", "Aを成しとげる"],
  ["turn out A", "Aになる、Aだと判明する"],
  ["turn out A", "Aを生産する"],
  ["occur to A", "Aの心に浮かぶ"],
  ["lead to A", "Aを引き起こす、Aに通じる"],
  ["talk over A", "Aについて話し合う"],
  ["hit on A", "Aを思いつく"],
  ["have done with A", "Aを終えてしまう"],
  ["hand in A", "Aを提出する"],
  ["go with A", "Aに似合う、Aに調和する"],
  ["go through A", "Aを経験する"],
  ["correspond with A", "Aと文通する"],
  ["contribute to A", "Aに貢献する、Aに寄与する"],
  ["call on A", "A(人)を訪問する"],
  ["call for A", "Aを必要とする、Aを要求する"],
  ["brush up A", "Aをやり直す、Aに磨きをかける"],
  ["begin with A", "Aで始まる、Aから始まる"],
  ["ask for A", "Aを求める"],
  ["attend to A", "Aに注意を払う"],
  ["aim at A", "Aをめざす"],
  ["send for A", "Aを呼びにやる"],
  ["lie in A", "Aにある"],
  ["consist in A", "Aにある"],
  ["consist of A", "Aから成り立つ"],
  ["be made up of A", "Aから成り立つ"],
  ["be composed of A", "Aから成り立つ"],
  ["what do with A", "Aをどう処理するか、Aをどう扱うか"],
  ["put up with A", "Aをがまんする"],
  ["look forward to A", "Aを楽しみに待つ"],
  ["look up to A", "Aを尊敬する"],
  ["look down on A", "Aを軽蔑する"],
  ["do away with A", "Aを廃止する、Aを始末する"],
  ["get rid of A", "Aを取り除く"],
  ["find fault with A", "Aを非難する"],
  ["get away from A", "Aから逃れる、Aから逃げる"],
  ["get along with A", "Aと仲良くやる、Aがはかどる"],
  ["get on", "仲良くやる"],
  ["catch up with A", "Aに追いつく"],
  ["keep up with A", "Aに遅れずについていく"],
  ["keep pace with A", "Aに遅れずについていく"],
  ["keep abreast of A", "Aに遅れずについていく"],
  ["make use of A", "Aを利用する"],
  ["take advantage of A", "Aを利用する"],
  ["avail oneself of A", "Aを利用する"],
  ["make the most of A", "Aを最大限に利用する"],
  ["take account of A", "Aを考慮に入れる"],
  ["take A into account", "Aを考慮に入れる"],
  ["take A into consideration", "Aを考慮に入れる"],
  ["think much of A", "Aを重視する"],
  ["make much of A", "Aを重視する"],
  ["make light of A", "Aを軽視する"],
  ["make nothing of A", "Aをなんとも思わない"],
  ["make fun of A", "Aをばかにする、Aをからかう"],
  ["make a fool of oneself", "ばかなことをして物笑いになる"],
  ["take part in A", "Aに参加する"],
  ["participate in A", "Aに参加する"],
  ["catch sight of A", "Aを見つける"],
  ["lose sight of A", "Aを見失う"],
  ["do the sights of A", "Aを見物する"],
  ["play a part in A", "Aで役割を演じる"],
  ["play a role in A", "Aで役割を演じる"],
  ["make up for A", "Aを償う、Aを埋め合わせる"],
  ["pay attention to A", "Aに注意を払う"],
  ["pay a visit to A", "Aを訪問する"],
  ["speak ill of A", "Aの悪口を言う"],
  ["take pride in A", "Aを誇りに思う"],
  ["pride oneself on A", "Aを誇りに思う"],
  ["be proud of A", "Aを誇りに思う"],
  ["take a delight in A", "Aを喜ぶ、Aを楽しむ"],
  ["drop in at A", "A(場所)に立ち寄る"],
  ["absent oneself from A", "Aを欠席する"],
  ["accuse A of B", "AをBの理由で非難する、AをBで告発する"],
  ["blame A for B", "AをBの理由で非難する、BをAのせいにする"],
  ["blame A on B", "AをBのせいにする"],
  ["rob A of B", "AからBを奪う"],
  ["cure A of B", "AからBを取り除いて治す"],
  ["supply A with B", "AにBを供給する"],
  ["present A with B", "AにBを贈る"],
  ["provide A with B", "AにBを供給する"],
  ["provide A for B", "AにBを供給する"],
  ["look on A as B", "AをBとみなす"],
  ["think of A as B", "AをBとみなす"],
  ["distinguish A from B", "AとBを区別する"],
  ["tell A from B", "AとBを区別する"],
  ["know A from B", "AとBを区別する"],
  ["convince A of B", "AにBを確信させる"],
  ["remind A of B", "AにBを思い出させる"],
  ["inform A of B", "AにBを知らせる"],
  ["free A from B", "AをBから自由にする/解放する"],
  ["separate A from B", "AをBから引き離す"],
  ["keep A from doing", "Aが〜するのを妨げる"],
  ["help A with B", "AのBを手伝う"],
  ["compare A to B", "AをBにたとえる"],
  ["congratulate A on B", "AをBのことで祝う"],
  ["prefer A to B", "BよりもAを好む"],
  ["owe A to B", "AをBに負うている、AはBのおかげだ"],
  ["order A from B", "AをBに注文する"],
  ["mistake A for B", "AをBと間違える"],
  ["take A for B", "AをBと間違える"],
  ["name A after B", "BにちなんでAに名前をつける"],
  ["make A into B", "AをB(製品)に作る"],
  ["leave A to B", "AをBに任せる"],
  ["depend on A", "Aに頼る"],
  ["depend on A for B", "BのことでAを頼る"],
  ["put A into practice", "Aを実行する"],
  ["take A for a ride", "Aをドライブに連れて行く"],
  ["look A up in B", "AをBで調べる"],
  ["learn A by heart", "Aを暗記する"],
  ["drop A a line", "Aに一筆書く"],
  ["do A good", "Aのためになる"],
  ["do A a favor", "Aに恩恵を施す、Aに好意を示す"],
  ["do damage to A", "Aに損害を与える"],
  ["give up A", "Aをやめる、Aをあきらめる"],
  ["give A up for lost", "Aはだめだとあきらめる"],
  ["come true", "実現する"],
  ["go wong", "うまくいかない、故障する"],
  ["go bad", "腐る"],
  ["lose one's temper", "腹を立てる"],
  ["keep one's temper", "平静を保つ"],
  ["hold one's tongue", "黙っている"],
  ["put on weight", "太る"],
  ["lose weight", "やせる"],
  ["make an effort", "努力する、がんばる"],
  ["take place", "起こる、行われる"],
  ["come about", "起こる"],
  ["break out", "急に起こる、勃発する"],
  ["make progress", "進歩する"],
  ["make up one's mind", "決心する"],
  ["it makes no difference to A", "〜は(Aにとって)どうでもよい"],
  ["keep good time", "(時計の)時間が正確だ"],
  ["keep early hours", "早寝早起きする"],
  ["have one's own way", "自分の思い通りにする"],
  ["go into details", "詳細に述べる"],
  ["come into existence", "(人・物が)生まれる"],
  ["earn a living", "生計を立てる"],
  ["keep one's word", "約束を守る"],
  ["take it easy", "のんびりやる"],
  ["mind one's own business", "余計なことに口を出さない"],
  ["make a reservation", "予約をする"],
  ["give A a hand", "Aに手を貸す、Aを手伝う"],
  ["have no idea", "わからない"],
  ["show up", "現れる"],
  ["turn up", "現れる"],
  ["pass away", "死ぬ、すたれる"],
  ["look out for A", "(Aに)気をつける、(Aに)注意する"],
  ["go out", "(火や明かりが)消える"],
  ["get off", "(バスなどから)降りる"],
  ["break down", "故障する、だめになる"],
  ["sit up", "寝ずに起きている"],
  ["stay up late", "夜ふかしをする"],
  ["remember me to A", "Aによろしくと伝える"],
  ["give my best regards to A", "Aによろしくと伝える"],
  ["say hello to A", "Aによろしくと伝える"],
  ["turn a deaf ear to A", "Aに耳をかさない"],
  ["have something to do with A", "Aと何らかの関係がある"],
  ["have nothing to do with A", "Aと何の関係もない"],
  ["have knowledge of A", "Aを知っている、Aを認識する"],
  ["keep on doing", "〜し続ける"],
  ["go on doing", "(ずっと)〜し続ける"],
  ["make a point of doing", "〜することにしている"],
  ["make believe", "ふりをする"],
  ["happen to do", "たまたま〜する"],
  ["manage to do", "どうにかして〜する"],
  ["never fail to do", "必ず〜する"],
  ["know better than to do", "〜するようなばかではない"],
  ["have every reason to do", "〜する十分な理由がある"],
  ["have the kindness to do", "親切にも〜する"],
  ["have the good fortune to do", "幸いにもする"],
  ["have no choice but to do", "〜するよりしかたない"],
  ["do nothing but ", "〜する以外何もしない"],
  ["cannot too", "どんなに〜しても〜しすぎることはない"],
  ["be sensitive to A", "Aに敏感である"],
  ["be similar to A", "Aに似ている"],
  ["be peculiar to A", "Aに特有である"],
  ["be dependent on A", "Aに頼る、Aしだいである"],
  ["be independent of A", "A から独立している"],
  ["be indifferent to A", "Aに無関心である"],
  ["be rich in A", "Aに恵まれている、Aに富んでいる"],
  ["be preferable to A", "Aよりも好ましい"],
  ["be ignorant of A", "Aを知らない"],
  ["be guilty of A", "Aの罪を犯している"],
  ["be jealous of A", "Aをねたんでいる"],
  ["be envious of A", "Aをうらやんでいる"],
  ["be angry about A", "A(事柄)に腹を立てている"],
  ["get ready for A", "Aの準備をする"],
  ["be ashamed of A", "Aを恥じている"],
  ["be fit for A", "Aにふさわしい"],
  ["be due to A", "Aが原因である"],
  ["be free from A", "Aがない"],
  ["be free of A", "Aがない"],
  ["be free to do", "自由に〜できる"],
  ["be well off", "暮らし向きがよい"],
  ["be familiar with A", "Aをよく知っている"],
  ["be familiar to A", "Aによく知られている"],
  ["be anxious about A", "Aを心配している"],
  ["be anxious for A", "Aを切望する"],
  ["be sure of A", "Aを確信する"],
  ["be sure to do", "必ず〜する"],
  ["be famous for A", "Aで有名である"],
  ["be famous as A", "Aとして有名である"],
  ["be noted for A", "Aで有名である"],
  ["be known for A", "Aで知られている"],
  ["be known by A", "Aでわかる"],
  ["be contented with A", "Aに満足している"],
  ["be concerned with A", "Aに関係する、Aに関心がある"],
  ["be absorbed in A", "Aに没頭している"],
  ["be involved in A", "Aに巻き込まれる"],
  ["be accustomed to A", "Aに慣れている"],
  ["be bound for A", "A行きである"],
  ["be based on A", "Aに基づいている"],
  ["be built on A", "Aに基づいている"],
  ["be lost", "当惑する、道に迷う"],
  ["be at a loss", "途方に暮れる"],
  ["be at a loss words", "言葉につまる"],
  ["be compelled to do", "〜しなければならない"],
  ["be determined to do", "〜する決心をしている"],
  ["be apt to do", "〜しがちだ"],
  ["be about to do", "〜するところである"],
  ["be eager to do", "〜したがっている"],
  ["be to blame for A", "(Aのことで)責められるべきだ、責任がある"],
  ["be far from A", "Aどころではない"],
  ["be in need of A", "Aを必要とする"],
  ["a man of his word", "約束を守る人"],
  ["a man of few words", "口数の少ない人"],
  ["a man of letters", "文学者"],
  ["be at home in A", "Aに精通している"],
  ["be at home ", "くつろいでいる"],
  ["make oneself at home", "くつろぐ"],
  ["at work", "仕事中で"],
  ["at peace", "平和に、平和な"],
  ["at one's best", "最もいい状態で"],
  ["in one's twenties", "20代で"],
  ["in sight", "見えて"],
  ["A is no more B than C is D", "Cがで出ないのと同様にAはBでない"],
  ["not so much A as B", "AというよりむしろB"],
  ["on duty", "勤務時間で、当番で"],
  ["out of order", "故障して　"],
  ["out of the question", "論外な、問題にならない"],
  ["be in danger", "期間な状態にある"],
  ["beside oneself with A", "Aで我を忘れて"],
  ["under discussion", "討論中で"],
  ["under repair", "修理中で"],
  ["at will", "意のままに、自由に"],
  ["against A's will", "Aの意に反して"],
  ["as ahole", "全体として(の)"],
  ["on the whole", "概して、大体のところ"],
  ["as a rule", "概して、大体のところ"],
  ["in vain", "むだに、みだりに"],
  ["to no purpose", "むだに"],
  ["for nothing", "むだに"],
  ["for nothing", "無料で"],
  ["on purpose", "故意に"],
  ["to a great extent", "大いに"],
  ["to a certain degree", "ある程度"],
  ["in the end", "ついに、最後には"],
  ["in the long run", "長い目でみれば、結局は"],
  ["at any rate", "とにかく、いずれにせよ"],
  ["at any cost", "ぜひとも"],
  ["at first glance", "ひと目見て、すぐに"],
  ["in particular", "とりわけ、特に"],
  ["in other words", "言い換えれば"],
  ["in practice", "実際には"],
  ["behind A's back", "Aのいないところで"],
  ["by nature", "生来、生まれながら"],
  ["in all directions", "四方八方に"],
  ["all day", "一日中"],
  ["as such", "そういうものとして"],
  ["as such", "それ自体としては"],
  ["as well", "なおその上、おまけに"],
  ["from place to place", "あちこちへ"],
  ["in earnest", "まじめに、本気で"],
  ["in common", "共通の、共通に"],
  ["in A's opinion", "Aの考えでは"],
  ["on and off", "断続的に、不規則に"],
  ["on earth", "一体全体"],
  ["on one's own", "独力で、ひとりぼっちで"],
  ["on the phone", "電話で"],
  ["by oneself", "ひとりぼっちで"],
  ["in itself", "本質的に、それ自体"],
  ["of itself", "ひとりでに"],
  ["without fail", "必ず、きっと"],
  ["right away", "すぐに"],
  ["at times", "ときどき"],
  ["now and again", "ときどき"],
  ["on occasion", "ときどき"],
  ["once in a while", "ときどき"],
  ["for the time being", "当分の間"],
  ["at first", "初めのうち、最初は"],
  ["for the first time", "初めて"],
  ["on time", "時間通りに"],
  ["in time for A", "Aに間に合って"],
  ["behind time", "遅れて"],
  ["behind the times", "時代遅れで"],
  ["at a time", "一度に、続けざまに"],
  ["at any time", "いつなんどき、いつでも"],
  ["in time for A", "そのうち、やがて"],
  ["in no time", "すぐに、間もなく"],
  ["so far", "今まで"],
  ["for one's age", "年齢の割には"],
  ["considering one's age", "年齢の割には"],
  ["for good", "永久に"],
  ["nothing but A", "ただAだけ、Aにすぎない"],
  ["anything but A", "決してAでない"],
  ["all but A", "ほとんどA"],
  ["as many as A", "Aも(多く)"],
  ["as much as A", "Aも(多く)"],
  ["no more than A", "Aだけ、Aしかない"],
  ["no less than A", "Aも(多く)"],
  ["next to A", "ほとんどA"],
  ["quite a few A", "少なからぬA"],
  ["to say nothing of A", "Aは言うまでもなく"],
  ["not to mention A", "Aは言うまでもなく"],
  ["let alone A", "Aは言うまでもなく"],
  ["for all A", "Aにもかかわらず"],
  ["with all A", "Aにもかかわらず"],
  ["on account of A", "Aの理由で、Aのために"],
  ["at the sight of A", "Aを見て"],
  ["at the mercy of A", "Aのなすがままに"],
  ["at the cost of A", "Aを犠牲にして"],
  ["at the expense of A", "Aを犠牲にして"],
  ["in the face of A", "Aをものともせずに"],
  ["in favor of A", "Aに賛成して"],
  ["in place of A", "Aの代わりに"],
  ["from A's point of view", "Aの見地からすれば"],
  ["by way of A", "Aを経由して"],
  ["by way of A", "Aのつもりで"],
  ["in advance of A", "Aより進んで、Aに先立"],
  ["in advance", "あらかじめ、前方に"],
  ["in case of A", "Aに備えて"],
  ["just in case", "(通例文尾)万一の場合に備えて"],
  ["in addition", "その上、さらに"],
  ["as is often the case with A", "Aにはよくあることだが"],
  ["what do you say to doing?", "〜しませんか"],
  ["there is no doing", "〜できない"],
  ["it is not too much to say that", "〜と言っても過言でない"],
  ["that is", "すなわち、言い換えれば"],
  ["what will become of A?", "Aはどうなるのか"],
  ["as far as A is concerned", "Aに関する限り"],
  ["when it comes to A", "話がAのことになると"],
  ["why not do?", "〜したらどうですか"],
  ];

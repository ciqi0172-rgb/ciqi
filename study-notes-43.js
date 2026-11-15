(function(){
const previousRender=window.renderStudyNotes;
const vocab=[
[
["moan about","抱怨……","Academics have always moaned about their students：学界人士向来对学生满腹牢骚。"],
["scholarly effort","学术投入","effort 在此指学习和学术上的努力，不是单纯“努力工作”。"],
["be in decline","处于衰退中","as never before 强调衰退程度前所未有。"],
["know-it-all","自以为无所不知的人","带贬义或揶揄意味。"],
["a tenth of","十分之一","not even a tenth：甚至不到十分之一。"],
["standards","标准、水平","standards in colleges and universities 指高等教育标准。"],
["laxity","松懈、不严格","not just in lecturers’ heads：并非只是教师主观臆想。"]
],
[
["freshers","大学新生","英式英语常用词。"],
["pack sb off to","把某人送去……","pack freshers off to remedial courses：把新生送去补习。"],
["remedial courses","补习/补救课程","弥补先前未掌握的基础知识。"],
["ignorant of","对……不了解、缺乏……知识","ignorant of things they should have learned：连本应掌握的知识都不懂。"],
["struggle to do","做某事很吃力","struggle to understand texts：理解文本有困难。"],
["counterpart","对应的人、同类的人","their counterparts 指十年前与现在学生相对应的同龄学生。"],
["grasp","理解、领会","比单纯看见或读过更强调真正理解。"],
["ask for ... to be cut short","要求缩短……","cut short 是“缩短、削减”，不是“切断”。"]
],
[
["run by","由……开展/实施","Tests run by the OECD：经合组织开展的测试。"],
["OECD","经济合作与发展组织（经合组织）","a club of mostly rich countries 是作者的简化描述。"],
["literate / literacy","有读写能力的 / 读写能力","less literate 指读写能力较弱，不是阅读量较少。"],
["a growing number","越来越多的人","强调人数增长，不等于所有学生都变差。"],
["embarrass","使难堪","basic skills that would embarrass a child：技能水平甚至会让年幼孩子都感到难堪。"],
["half their age","年龄只有他们一半","their 指前面的学生。"],
["no better than","不比……更好","scores no better than a typical ten-year-old：得分不高于普通十岁孩子。"],
["numeracy","计算能力、数学素养","与 literacy（读写能力）并列。"]
],
[
["school marks","学校成绩、在校成绩","marks 是成绩，不是标记。"],
["lower the bar","降低门槛/标准","the bar 是比喻性的“标准”。"],
["applicant","申请者","applicants to university 指大学申请者。"],
["sit a test","参加考试","英式表达，sit 不要按“坐”直译。"],
["numerical and verbal reasoning","数学与语言推理","SAT 是相关测试的例子。"],
["Hispanic","西班牙裔/拉丁裔","美国语境中的族裔称谓。"],
["bums on seats","招够学生、保证入学人数","英式口语习语，字面不是文章要强调的重点。"]
],
[
["costs of all this","这一切的代价","all this 回指前文的教育标准下降及降低门槛等现象。"],
["reteach","重新教授、重教","reteaching basic material 指重新教基础内容。"],
["whizz-kid","尖子生、能力出众的年轻人","英式口语表达。"],
["excel","表现出色、脱颖而出","help whizz-kids excel：帮助尖子生进一步发展。"],
["ill-prepared","准备不足的","与学生是否已具备大学学习基础有关。"],
["be at risk of doing","有……的风险","at risk of dropping out：有辍学风险。"],
["prospects","前途、发展前景","hurt their prospects：损害他们的未来发展。"],
["dumb down","降低难度/要求","作者批评教育机构降低学术要求。"],
["grade inflation","成绩膨胀、分数通胀","高分越来越普遍，可能反映评分标准放宽。"],
["rampant","猖獗的、泛滥的","rampant cheating with AI：猖獗的AI作弊。"]
],
[
["slide","下滑、衰退","the slide 指学校教育标准或成绩的下滑，不是物理上的滑动。"],
["insist","坚持认为","Some insist this is impossible：一些人坚持认为这不可能。"],
["scourge","祸害、灾害","scourges such as child poverty：儿童贫困等社会祸害。"],
["baleful allure","有害的诱惑力","allure 是吸引力/诱惑；baleful 表示有害的。"],
["inch up","一点点上升","inching up 强调缓慢、逐步提高。"],
["league tables","排名榜","climb international league tables：在国际排名中上升。"],
["thanks in part to","部分归功于","说明原因，但不是唯一原因。"],
["rigorous","严格的、严谨的","more rigorous exams and curriculums：更严格的考试和课程。"],
["bin","丢弃、摒弃","英式用法；binned as pseudoscience：作为伪科学被摒弃。"],
["pseudoscience","伪科学","指缺乏可靠科学依据却被包装成科学的方法。"],
["reverse course","扭转原来的方向/做法","states that reversed course first：最先改变原有做法的州。"],
["post gains","取得进步/增长","have been posting big gains：已经取得显著进步。"]
],
[
["remedy","补救办法、解决办法","Another remedy 引出第二个解决方向。"],
["restore their commitment to","恢复对……的坚持/承诺","restore commitment to high standards：重新坚持高标准。"],
["admit","录取、准许入学","whom they choose to admit：他们选择录取谁。"],
["assess","评估、考核","how students are assessed：学生如何被考核。"],
["mandatory","强制性的、必须的","mandatory tests for all applicants：所有申请者都必须参加的测试。"],
["rein in","控制、遏制","rein in grade inflation：遏制成绩膨胀。"],
["impose a hard limit on","对……设定严格上限","限制每门课可授予的 A 等级成绩数量。"],
["hand out","发放、授予","the A grades they hand out：他们授予的 A 等级成绩。"],
["soar","猛增、飙升","从24%飙升到60%。"],
["radical proposal","激进的提议","作者认为这项提议值得更普遍地采用。"]
],
[
["policymaker","政策制定者","不一定特指政客。"],
["widen the ways","拓宽途径","widen the ways in which people can keep learning。"],
["options other than university","大学以外的选择","包括职业教育、学徒制等教育路径。"],
["apprentice","学徒","apprenticeships 是职业技能学习的一种途径。"],
["community college","社区大学","美国高等教育体系中的一种院校。"],
["stepping stone","垫脚石、过渡阶梯","比喻帮助学生逐步迈向更高教育阶段的途径。"],
["high-school graduate","高中毕业生","不要误读成高等学校毕业生。"],
["share","比例、占比","the share of youngsters：年轻人中的相应比例。"],
["even as","与此同时；尽管……的同时","将两种同时发生、方向相反的趋势放在一起。"],
["demanding","要求高的、严格的","demanding four-year universities 指学业要求较高的四年制大学。"]
],
[
["provide ... with ...","向……提供……","provide everyone with an opportunity：为每个人提供机会。"],
["blocker","障碍、阻碍","教育不应成为阻碍人们发展的因素。"],
["the less fortunate","处境较不利的人、弱势群体","不是指“幸运较少的地方”。"],
["hold sb in their place","把某人限制在原来的位置","比喻阻止弱势群体向上发展。"],
["tier","层级、阶梯","its tiers 指教育体系的不同层级。"],
["grant","给予","without granting them the skills they need：却没有给予他们所需技能。"],
["pragmatic","务实的","not pragmatic：不务实。"],
["racial equity","种族公平","a blow for racial equity：推动种族公平的举措。"],
["cowardice","懦弱、怯懦","作者用强烈措辞批评不愿正视教育问题的做法。"],
["let sb down","辜负某人、让某人失望","lets everybody down：辜负所有人。"]
]
];
const logic=[
"开篇用历史上学者抱怨学生的例子制造反差，再指出当下高等教育标准的担忧并非教师主观想象。段落功能：引出问题并确立文章讨论对象。",
"从数学基础、人文阅读、阅读清单三个方面列举教师观察，说明学生基础知识与阅读能力出现问题。属于具体表现，不是原因分析。",
"用经合组织测试数据验证前两段的担忧，并加上重要限定：顶尖学生仍然优秀，但基础技能薄弱的学生人数在增长。不要把它理解为所有学生都变差。",
"从现象转向原因：疫情造成冲击，但疫情前成绩已经下降；同时大学降低入学门槛，并呈现考试公平性争议和招生压力两种动机。",
"由原因转向代价：补基础挤占培养尖子生的资源；准备不足者可能辍学并受到更大伤害；弱学生又成为大学降低要求的理由；最后讽刺管理者面对成绩膨胀和AI作弊的能力。",
"提出第一个解决方向：防止中小学标准继续下滑。先呈现有人认为贫困和屏幕诱惑使改革不可能，再用新加坡、英国及美国部分州的例子说明改革可行。",
"提出第二个解决方向：大学恢复高标准。招生端重新引入强制测试；教学评价端通过限制A等级成绩数量遏制成绩膨胀。哈佛数据为问题提供证据。",
"提出第三个方向：拓宽大学以外的学习路径。学徒制太少，社区大学本应帮助需要额外支持的高中毕业生，但其比例下降，而进入高要求四年制大学的比例上升，呈现教育路径供给与学生需求之间的问题。",
"全文结论：教育必须为所有人提供机会，但不能只把学生推到更高层级而不赋予他们必要能力。作者反对用降低标准制造表面公平，主张机会与真实能力培养并重。"
];
const grammar=[
["第1段：not just ...","But this time, as our International section notes, the laxity is not just in lecturers’ heads.","主干：the laxity is not just in lecturers’ heads。as 引导插入性的评论/依据，意思是“正如……所指出的”。not just... 暗示这次确有现实证据，不只是教师主观臆断。"],
["第2段：定语从句修饰texts","Lecturers in humanities warn that students are struggling to understand texts that a decade ago their counterparts would easily have grasped.","主干是 Lecturers warn that...；宾语从句中，students are struggling to understand texts；that 引导定语从句修饰 texts。a decade ago 是时间状语，their counterparts 是从句主语，would have grasped 表示十年前同龄学生本来能够轻易理解。"],
["第3段：让步与数量增长","The best are cleverer than ever, but a growing number have basic skills that would embarrass a child half their age.","but 连接对比：最优秀学生更优秀，但基础技能薄弱的学生人数增长。that 引导定语从句修饰 basic skills；a child half their age 指年龄只有这些大学生一半的孩子。"],
["第4段：without / as","Others are trying to get enough bums on seats as the total number of 18-year-olds in America starts to fall.","as 在这里表示“随着”，不是简单的“因为”。随着美国18岁人口总数开始下降，一些大学努力招够学生。bums on seats 是招够入学人数的习语表达。"],
["第5段：比较结构","Ill-prepared students are at risk of dropping out, which can hurt their prospects more than if they had never enrolled.","which 指前面“辍学”这一情况；more than if... 表示辍学造成的前途损害，可能比他们当初根本没有入学还大。不要把比较方向翻反。"],
["第6段：原因状语与定语从句","Schools in England have also been climbing international league tables, thanks in part to reforms that made exams and curriculums more rigorous.","主句是 Schools ... have been climbing...；thanks in part to reforms 表示“部分归功于改革”；that made... 是定语从句修饰 reforms。因果关系是改革使考试和课程更严格，从而有助于排名上升。"],
["第7段：by表示手段","In May academics at Harvard agreed to rein in grade inflation by imposing a hard limit on the number of A grades they hand out in each course.","主干：academics at Harvard agreed to rein in grade inflation。by imposing... 表示采取的手段；on the number of A grades 是限制对象；they hand out 是定语从句，修饰 A grades。限制的是每门课授予的A等级成绩数量，不是毕业生数量。"],
["第8段：share与省略修饰","But the share of youngsters who go to them is declining, even as the share heading to demanding four-year universities is going up.","前半句中 who go to them 修饰 youngsters，them 指 community colleges。后半句 the share heading to... 中 heading to... 是现在分词短语修饰 share/对应的年轻人。even as 把两种同时发生、方向相反的趋势并置：社区大学比例下降，四年制大学比例上升。"],
["第9段：动名词短语作主语","But raising young people up its tiers without granting them the skills they need is not pragmatic, or a kindness, or a blow for racial equity.","主语是 raising young people up its tiers；without granting... 表示缺少必要条件；they need 是定语从句修饰 skills。谓语 is 后连续列出三种否定评价：不务实、不是善意、也不推动种族公平。"],
["第9段：定语从句指向","It is a cowardice that lets everybody down.","It 指上一句所批评的做法，即不提供必要能力却把年轻人推向更高教育层级。that lets everybody down 是定语从句，修饰 cowardice。"]
];
const translations=[
"学界人士向来对学生们满腹牢骚。“学术努力正前所未有地衰落，”11世纪的自以为无所不知的列日的埃格伯特曾这样抱怨道，而那个时代甚至连十分之一的人类都不识字。近来，关于高等院校教育标准的担忧层出不穷，尤其是在拥有众多世界顶尖大学的美国。但这一次，正如我们国际版块所指出的，这种松懈并非只是讲师们的主观臆断。",
"数学教授反映，他们不得不先把大学新生送去上补习课，之后才能开始真正的教学。有些学生进入大学时，对中学早期就应该掌握的知识一无所知。人文学科的讲师警告说，如今学生理解文本很吃力，而十年前的同龄人本来可以轻而易举地理解这些文本。越来越多的学生要求缩短阅读清单。",
"经合组织——一个主要由富裕国家组成的组织——开展的测试表明，高等院校学生的读写能力比十年前更弱。最优秀的学生比以往任何时候都更聪明，但越来越多的学生，其基本技能水平甚至会让年龄只有他们一半的孩子都感到难堪。在美国高校中，大约七分之一的学生在读写能力测试中的得分不高于普通十岁孩子。在计算能力方面，这一比例接近五分之一。",
"一个解释是疫情对学校教育造成的损害。另一个原因是，即使在新冠疫情之前，美国和许多其他富裕国家的在校成绩就已经在下降。与此同时，许多高等院校一直在降低入学门槛。在美国，高校大多已不再要求申请者参加数学和语言推理测试，例如SAT。一些人认为这些考试对黑人和西班牙裔学生不公平。另一些人则试图招够学生，因为美国18岁人口总数开始下降。",
"这一切的代价是巨大的。花在重教基础知识上的时间和金钱，就无法用于帮助尖子生进一步发展。准备不足的学生有辍学的风险，而辍学对他们前途的伤害，可能比他们当初根本没有入学还大。基础薄弱的学生也给了高等院校更多降低要求的理由。在经历了多年的成绩膨胀之后，很难确信学校管理者能够解决一个棘手的新问题：如何应对猖獗的AI作弊。",
"阻止这种下滑的一个办法，是防止中小学教育标准继续下降。一些人坚持认为，如果不同时解决儿童贫困或电子屏幕的不良诱惑等祸害，这一点就不可能做到。事实上，新加坡的成绩多年来一直在缓慢上升，甚至在疫情期间也有所提高。英国学校在国际排名中也在攀升，部分归功于使考试和课程更加严格的改革。美国人终于开始认识到，他们的许多学校仍在使用其他国家早已作为伪科学而摒弃的读写教学方法。最先扭转原有做法的州，例如密西西比州，已经取得了显著进步。",
"另一种补救办法，是让大学领导者恢复对高标准的坚持，无论是在选择录取谁方面，还是在学生学习过程中如何接受考核方面。美国最优秀的大学已经开始重新引入面向所有申请者的必考测试；其他大学也应该跟进。五月，哈佛大学的学者们同意通过严格限制每门课程可以授予的A等级成绩数量，来遏制成绩膨胀。A等级成绩占全部成绩的比例，已从2005年的24%飙升至去年的60%。这种提议曾经被认为很激进，但它理应更加普遍。",
"政策制定者还应该拓宽人们离开学校后继续学习的途径。尤其是在英语国家，大学以外的选择太少了。美国的学徒人数甚至比英国还少，而英国本身的学徒人数就少得可怜。美国的社区大学本应为那些需要更多帮助的高中毕业生充当过渡阶梯。但进入社区大学的年轻人比例正在下降，与此同时，进入学业要求较高的四年制大学的年轻人比例却在上升。",
"教育应该为每个人提供机会。它绝不能成为一种阻碍，只把教育的好处给予少数善于讨巧的人，却把处境较不利的人困在原来的位置。但是，如果没有给予年轻人所需要的技能，就把他们推向教育体系的更高层级，这既不务实，也不是善意之举，更不是推动种族公平的举措。这是一种辜负所有人的懦弱行为。"
];
const pitfalls=[
["把作者列举的观点当成作者赞同","第4段的 Some believe... Others... 是相关人士的观点或动机，不自动等于作者立场。","判断作者态度要看转折、评价词和后续论证，不能只看观点被写进文章。"],
["把 less literate 误读成阅读量少","less literate 指读写能力更弱，强调理解、运用文字的能力。","遇到 -literate / literacy，优先考虑读写能力语义。"],
["把 The best 理解成最清楚/最好的事物","此处省略 students，指最优秀的学生。","结合上句的 students 和后面的 a growing number，判断对比的对象。"],
["把 grade inflation 误读成毕业生膨胀","grade inflation 是成绩膨胀：高分比例上升，评分可能放宽。","记住 grade 是成绩/评分；inflation 是膨胀、虚高。"],
["把 by imposing 理解成限制导致问题","by 引出手段：通过限制A等级成绩数量来遏制成绩膨胀。","先找谓语目的 rein in，再问 by doing 是采取什么手段。"],
["把 A grades 的24%到60%误读成奖学金比例","原文指A等级成绩占全部授予成绩的比例，不是学生获得奖学金的比例。","回指 These，确认它指的是前一句的 A grades。"],
["把新加坡成绩与英国排名混在一起","新加坡：marks 多年缓慢上升；英国：international league tables 排名上升。","复述时给每个例子标注国家、指标和结果，避免信息串位。"],
["把 high-school graduates 误读成高等学校毕业生","high school 是高中；high-school graduates 是高中毕业生。","辨清美国教育体系词汇。"],
["忽略 even as 的并置关系","社区大学入学比例下降，同时四年制大学入学比例上升。","把同一句中的两种趋势分别写出，再解释作者为何并列它们。"],
["把 raising young people up tiers 当成作者赞成的做法","作者批评的是没有给予必要技能、却把学生推到更高层级。","不要截断长句；必须把 without granting... 接回主句。"],
["把教育公平理解成降低标准","作者主张机会与能力培养并重，而不是让学生在缺乏准备时进入更高层级。","区分“获得入学机会”和“真正获得学习所需能力”。"],
["逻辑不顺时仍沿着第一个译法硬推","本篇反复出现词义误判、修饰关系错位、句间逻辑未建立。","译文不通顺时依次检查词义、句法主干/修饰、前后句功能，不要只润色原译。"]
];
const questions=[
{q:"Which of the following best captures the author's central argument?",opts:[
"Universities should admit fewer students because widening access inevitably lowers academic standards.",
"Educational fairness requires both access to education and the skills needed to benefit from it; lowering standards alone is not a genuine solution.",
"The decline in students' abilities is mainly a consequence of the pandemic and can be reversed only by improving schools.",
"Standardized tests are the most reliable way to ensure that students from disadvantaged backgrounds receive equal treatment."
],a:1,why:"全文并不是反对扩大教育机会，而是反对用降低标准代替真实支持。第6—8段提出多层面的改革，第9段明确区分“把学生送入更高层级”和“让学生具备应对学习的能力”。",analyses:[
"A 把作者对降低标准的批评偷换成反对扩大入学机会；inevitably 还把可能的风险说成必然结果。",
"B 正确。access 与 skills 两个要素同时保留，准确概括结尾并统摄三个解决方向。",
"C 把疫情夸大成主要且几乎唯一的原因；第4段明确说疫情前成绩已经下降。",
"D 把第7段重新引入测试的一项措施夸大成最可靠、唯一的公平保障，也忽略了职业路径和中小学改革。"
]},
{q:"Why does the author mention that the best students are becoming cleverer while a growing number have very weak basic skills?",opts:[
"To show that the reported decline in standards is exaggerated because top students continue to excel.",
"To suggest that universities should concentrate resources on gifted students rather than less capable ones.",
"To distinguish the success of the strongest students from the widening problem of inadequate basic skills among other students.",
"To argue that students' basic skills have declined because universities admit too many gifted students."
],a:2,why:"The best... but a growing number... 通过 but 建立对照。作者没有说所有学生都变差，也没有把两种趋势解释成因果，而是强调顶尖学生表现与基础技能薄弱者增多可以同时存在。",analyses:[
"A 只抓住前半句，忽略 but 后面才是作者要强调的问题。",
"B 原文没有主张减少对普通学生的支持；第5段反而担忧补基础挤占帮助尖子生的资源。",
"C 正确。它保留了两组学生之间的对比，没有把局部情况扩大成全体情况。",
"D 无中生有地建立了“录取尖子生导致其他学生技能下降”的因果关系。"
]},
{q:"In paragraph 4, the references to fairness concerns about tests and the need to fill university places mainly serve to",opts:[
"establish that the author considers both reasons equally convincing.",
"present possible motives behind universities' decision to lower entry requirements without necessarily endorsing them.",
"prove that standardized tests unfairly discriminate against all minority applicants.",
"show that falling birth rates are the sole cause of lower admission standards."
],a:1,why:"Some believe... Others are trying... 是在呈现他人的看法和动机。作者并未在此处直接认同考试不公平的判断，也没有说人口下降是唯一原因。",analyses:[
"A 把“呈现两种理由”偷换成作者认为两种理由同样有说服力；原文没有这样的评价。",
"B 正确。注意 Some believe / Others are trying 这类表达标示观点归属，不能自动算作作者立场。",
"C all minority applicants 是范围扩大，原文只说 some believe 这些考试对黑人和西班牙裔学生不公平。",
"D sole cause 是绝对化；原文还讨论考试公平性争议等其他动机。"
]},
{q:"What is the function of the Singapore, England and Mississippi examples in paragraph 6?",opts:[
"They demonstrate that educational standards can improve through policy and teaching reforms, countering the claim that improvement is impossible.",
"They prove that all countries should adopt exactly the same curriculum and testing system.",
"They show that improvements in university admissions automatically raise literacy levels in primary and secondary schools.",
"They suggest that poverty and screen use have no effect on children's education."
],a:0,why:"前面有人认为不解决儿童贫困、屏幕诱惑等问题就不可能提高标准；后面用新加坡成绩、英国考试课程改革、密西西比州改变教学做法的例子说明改革并非不可能。",analyses:[
"A 正确。例子的作用是反驳“无法改善”的绝对判断，并提供不同改革路径的实例。",
"B 原文没有要求照搬完全相同的课程或考试体系；这些例子来自不同国家和州。",
"C 把中小学教学改革与大学招生之间建立了原文没有的自动因果关系。",
"D 原文没有否认贫困和屏幕使用可能造成影响；它反驳的是这些问题使改革完全不可能的说法。"
]},
{q:"In paragraph 7, what does the rise in A grades from 24% to 60% most directly indicate?",opts:[
"The proportion of students receiving financial aid has more than doubled.",
"The number of students graduating from Harvard has increased at the same rate.",
"High grades have become much more common, supporting the concern that grading standards may have become less demanding.",
"Students' actual academic abilities have improved substantially over the period."
],a:2,why:"These 回指 A grades；24%和60%指A等级成绩占全部成绩的比例。这个变化是成绩膨胀的证据，而不能直接证明学生真实能力提高或下降。",analyses:[
"A 原文没有提到 financial aid（经济资助或奖学金），属于关键词联想造成的无中生有。",
"B 原文说的是成绩比例，不是毕业生人数；指标被偷换。",
"C 正确。高分占比大幅上升支持作者对 grade inflation 的担忧，但不等于单凭数据就能断定每个学生的真实能力。",
"D 把成绩分布直接等同于真实能力变化，混淆评分结果与实际掌握程度。"
]},
{q:"Consider the sentence: “But the share of youngsters who go to them is declining, even as the share heading to demanding four-year universities is going up.” Which interpretation is best supported?",opts:[
"Fewer young people are entering community colleges while a larger share are heading to demanding four-year universities; the sentence contrasts simultaneous trends rather than proving that one causes the other.",
"The decline in community-college enrollment has caused more students to enter four-year universities.",
"Community colleges are becoming more demanding, which explains why their share is declining.",
"The share of young people who need extra help is declining as their academic abilities improve."
],a:0,why:"them 指 community colleges；两个 share 分别对应进入社区大学和进入要求较高的四年制大学的年轻人比例。even as 在这里把同时发生、方向相反的趋势并列起来，不足以证明因果关系。",analyses:[
"A 正确。它准确解释指代、比例对象和 even as 的对照功能，同时没有擅自补出因果。",
"B 把并列趋势解释成因果关系；原文没有说社区大学比例下降导致四年制大学比例上升。",
"C demanding 修饰 four-year universities，不是 community colleges；修饰对象被错接。",
"D 把“进入某类学校的比例”偷换成“需要帮助的年轻人比例”，且原文没有说能力正在改善。"
]},
{q:"In the final paragraph, the phrase “without granting them the skills they need” is crucial because it",opts:[
"explains why young people should be prevented from progressing to higher levels of education.",
"qualifies the criticism by identifying the problem as advancement without the necessary preparation, rather than advancement itself.",
"shows that the author believes disadvantaged students are incapable of acquiring academic skills.",
"means that educational institutions should grant students certificates before they complete their training."
],a:1,why:"主语是 raising young people up its tiers；without granting... 表示“在没有给予他们所需技能的情况下”。作者批评的是缺少能力培养却单纯把学生推向更高层级，不是反对学生进步或接受高等教育。",analyses:[
"A 把对“缺乏准备的晋升”的批评扩大成应阻止所有年轻人升学，改变了作者立场。",
"B 正确。without 短语限定了作者批评的具体条件，是理解整句逻辑的关键。",
"C 把制度未能提供技能偷换成学生自身无能力学习，原文没有这种贬低弱势学生的观点。",
"D 把 skills 偷换成 certificates（证书），完全改变了句意。"
]},
{q:"Which of the following can be inferred from the author's discussion of grade inflation and alternative educational routes?",opts:[
"The author regards academic standards and educational access as fundamentally incompatible.",
"The author believes that every student should follow the same university pathway if admission tests are fair.",
"Restoring standards should be accompanied by credible ways for students with different needs to learn and progress.",
"Community colleges are responsible for the decline in students' literacy and numeracy."
],a:2,why:"第7段主张大学恢复标准，第8段又主张拓宽大学以外的学习路径。两者合起来说明作者不是简单关门，而是要求标准与多样化、可行的学习路径并存。",analyses:[
"A 与全文主张相反；作者认为机会和能力培养应当兼顾。",
"B 把所有学生都引向同一条大学路径，与拓宽大学以外选择的主张冲突。",
"C 正确。它综合了相邻两段的解决方案，是合理推断，而不是原句复述。",
"D 原文没有把学生读写和计算能力下降归咎于社区大学；该选项建立了无依据的因果关系。"
]},
{q:"Which option best explains the contrast between “opportunity” in the opening sentence of paragraph 9 and the criticism that follows?",opts:[
"The author first supports universal access, then rejects it because some students are not academically prepared.",
"The author distinguishes genuine educational opportunity from the appearance of fairness created by moving students upward without equipping them to succeed.",
"The author argues that education benefits only a small group and should therefore be restricted.",
"The author uses the contrast to claim that racial equity should be abandoned in favor of academic excellence."
],a:1,why:"结尾先承认教育应向所有人提供机会，再反对只把教育好处给少数人、或把学生推向更高层级却不给所需技能。作者反对的是表面公平，不是公平本身。",analyses:[
"A 把批评的对象偷换成普遍入学机会；作者反对的是缺乏必要能力支持的晋升。",
"B 正确。它抓住 genuine opportunity 与 superficial advancement 的区别，且保留作者对教育公平的承诺。",
"C 把作者批评的少数人获益现象误说成作者自己的主张，观点主体完全颠倒。",
"D 将种族公平与学术标准设为二选一，但作者认为真正的公平应当让学生获得所需能力，而不是放弃公平。"
]}
];
const personalReview=[
{title:"第1段：词汇盲区与句意",items:[
["确认不熟的表达","moan about、scholarly effort、be in decline、as never before、know-it-all、a tenth of、laxity、home to。","这些表达会影响整句搭建，尤其 home to 是“拥有……/……所在地”，不能按字面硬译。"],
["句法与逻辑","But this time 是转折重点；the laxity is not just in lecturers’ heads 表示这种松懈并非教师主观臆想。","先抓主干 the laxity is not just...，再处理 as our International section notes 这个插入说明。"]
]},
{title:"第2段：词汇盲区与修饰关系",items:[
["确认不熟的表达","freshers、pack sb off to、remedial courses、ignorant of、struggle to do、counterpart、grasp、increasingly、cut short。","ask for ... to be cut short 是“要求缩短……”，ask for 不是“询问”。"],
["长句结构","texts that a decade ago their counterparts would easily have grasped 中，that 引导定语从句修饰 texts；their counterparts 指十年前相对应的同龄学生。","不能把时间、人物关系拆乱；主句是 students are struggling to understand texts。"]
]},
{title:"第3段：数量与对比关系",items:[
["词义辨析","literacy 是读写能力，numeracy 是计算能力；half their age 是年龄只有他们一半。","不要把 less literate 简化成“读书少”，它指读写能力较弱。"],
["逻辑误读","The best are cleverer than ever, but a growing number... 是对比：顶尖学生更优秀，同时基础技能薄弱者人数增长。","不是所有学生都变差。翻译时保留 but 两侧的对照，不能只概括成整体退步。"]
]},
{title:"第4段：原因、观点与语气",items:[
["信息关系","疫情是一个解释；另一个原因是疫情前学校成绩已经下降。随后转向大学降低入学门槛。","不能把疫情写成唯一原因，also before covid-19 是重要时间限定。"],
["作者观点辨析","Some believe... Others are trying... 是其他人对考试公平性和招生压力的看法/动机，不等于作者本人直接赞同这些理由。","要区分作者在报告他人观点，还是在表达自己的立场。as the total number... starts to fall 表示随着18岁人口下降。"]
]},
{title:"第5段：比较结构与术语",items:[
["术语纠偏","grade inflation 是“成绩膨胀/分数虚高”，不是“毕业生膨胀”。rampant cheating 是“猖獗的作弊”。","识别 grade 指成绩、评分；inflation 指膨胀、虚高。"],
["长句关系","Ill-prepared students... , which can hurt their prospects more than if they had never enrolled. which 指辍学这一情况；more than if... 比较辍学造成的伤害与从未入学的情况。","注意比较方向：作者说辍学可能比一开始不入学更损害前途，不要翻反。"]
]},
{title:"第6段：例子不能串位",items:[
["词汇与表达","slide、scourge、baleful allure、inch up、league tables、rigorous、bin、pseudoscience、reverse course、post gains。","尤其 inch up 是缓慢上升，reverse course 是扭转原有做法，post gains 是取得进步。"],
["复述信息错位","新加坡对应 marks 缓慢上升，英国对应国际排名上升；美国部分州则是改变读写教学方法后取得进步。","你曾把新加坡成绩上升与英国排名上升的内容混在一起。复述每个例子时分别核对“国家—指标—结果”。"]
]},
{title:"第7段：by 手段结构与指代",items:[
["确认不熟的表达","rein in 是“遏制”；impose a hard limit on 是“对……设定严格上限”；hand out 是“授予/发放”；soar 是“飙升”。","rein in grade inflation 是遏制成绩膨胀，不是控制学生人数。"],
["实际错译","imposing a hard limit on the number of A grades they hand out in each course 被误解成限制毕业生数量；These 指前句的 A grades，24%升至60%说的是A等级成绩占全部成绩的比例，不是奖学金比例。","by imposing... 说明采取什么手段；they hand out 修饰 A grades。读到代词 These 时要回看前一句确定指代。"]
]},
{title:"第8段：高中毕业生与 even as",items:[
["实际错译","high-school graduates 被误读成高等学校毕业生；实际是高中毕业生。who need more help 修饰这些高中毕业生。","先找名词中心词 graduates，再确认 high-school 对它的限定。"],
["逻辑关系","the share of youngsters who go to them is declining 中 them 指 community colleges；even as 后面说进入高要求四年制大学的比例上升。","两种趋势同时发生且方向相反；原文没有证明前者导致后者。"]
]},
{title:"第9段：长句主干与指代",items:[
["实际词汇盲区","the less fortunate 是处境较不利的人/弱势群体；cowardice 是懦弱；let everybody down 是辜负所有人。","the less fortunate 指人，不是“幸运较少的地方”。"],
["实际句法困难","raising young people up its tiers 是主语；without granting them the skills they need 表示在没有给予他们所需技能的情况下；they need 修饰 skills。It is a cowardice that lets everybody down 中 that 修饰 cowardice。","不能把 without 从主干中丢掉。作者批评的是“没有提供必要能力却把学生推向更高层级”，不是反对年轻人接受更高层次教育。"]
]}
];
function render43(){
 const root=document.getElementById('studyPanel');if(!root)return;
 const rows=[...document.querySelectorAll('#paragraphs .para')];if(!rows.length)return;
 let selected=Math.min(rows.length,Math.max(1,Number(root.dataset.selected||1)));
 let mode=root.dataset.sideMode||'vocab';
 root.innerHTML='<div class="study-workbench"><section class="study-main"><header class="study-original-head"><div class="kicker">ARTICLE 43 · CLOSE READING</div><h2>University-for-all harms poor students the most</h2><p>Time for sane standards in higher education</p></header><div class="study-original-paragraphs">'+rows.map((r,i)=>'<div class="study-para '+(i+1===selected?'active':'')+'" data-p="'+(i+1)+'"><span class="study-para-num">'+String(i+1).padStart(2,'0')+'</span><p class="study-para-text"></p></div>').join('')+'</div></section><aside class="study-aside"><div class="study-aside-title"><b>精读功能栏</b><span class="study-current"></span></div><div class="study-side-tabs"><button class="study-side-tab" data-mode="vocab">重点词汇</button><button class="study-side-tab" data-mode="logic">段落逻辑</button><button class="study-side-tab" data-mode="grammar">长难句</button><button class="study-side-tab" data-mode="translation">全文翻译</button><button class="study-side-tab" data-mode="pitfalls">易错点</button><button class="study-side-tab" data-mode="personal">我的翻译问题</button><button class="study-side-tab" data-mode="questions">精读练习</button></div><div class="study-side-content"></div><div class="study-side-tip">点击左侧段落同步查看对应词汇、逻辑和长难句；全文翻译、易错点与命题练习可通过上方功能栏切换。</div></aside></div>';
 root.querySelectorAll('.study-para').forEach((el,i)=>{el.querySelector('p').textContent=rows[i].querySelector('.para-text')?.textContent||'';el.onclick=()=>{selected=i+1;root.dataset.selected=String(selected);root.querySelectorAll('.study-para').forEach((x,j)=>x.classList.toggle('active',j===i));draw()}});
 function draw(){
  root.querySelector('.study-current').textContent='第'+selected+'段 / '+rows.length;
  root.querySelectorAll('.study-side-tab').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
  const c=root.querySelector('.study-side-content');c.innerHTML='';
  if(mode==='vocab'){
   c.innerHTML='<h4>第'+selected+'段 · 重点词汇与表达</h4>'+vocab[selected-1].map(v=>'<div class="study-vocab"><b></b><span></span><small></small></div>').join('');
   [...c.querySelectorAll('.study-vocab')].forEach((e,i)=>{e.querySelector('b').textContent=vocab[selected-1][i][0];e.querySelector('span').textContent=vocab[selected-1][i][1];e.querySelector('small').textContent=vocab[selected-1][i][2]});
  }else if(mode==='logic'){c.innerHTML='<h4>第'+selected+'段 · 段落功能</h4><p></p><p class="notes-muted">阅读检查：本段提供的是现象、原因、证据、解决方案，还是结论？</p>';c.querySelector('p').textContent=logic[selected-1]}
  else if(mode==='grammar'){const items=grammar.filter(g=>g[0].startsWith('第'+selected+'段'));c.innerHTML='<h4>第'+selected+'段 · 长难句拆解</h4>'+(items.length?items.map(g=>'<details open><summary>'+g[0]+'</summary><p class="en-sentence"></p><p></p></details>').join(''):'<p>本段没有单独列出的重点长难句。可先找主句谓语，再判断修饰语、代词指代和逻辑连接。');[...c.querySelectorAll('details')].forEach((d,i)=>{const g=items[i];d.querySelector('.en-sentence').textContent=g[1];d.querySelectorAll('p')[1].textContent=g[2]})}
  else if(mode==='translation'){c.innerHTML='<h4>全文参考翻译（按段对应）</h4>'+translations.map((t,i)=>'<details '+(i+1===selected?'open':'')+'><summary>第'+(i+1)+'段</summary><p></p></details>').join('');[...c.querySelectorAll('details')].forEach((d,i)=>d.querySelector('p').textContent=translations[i])}
  else if(mode==='pitfalls'){c.innerHTML='<h4>本篇易错点与自我纠偏</h4>'+pitfalls.map((p,i)=>'<details '+(i<3?'open':'')+'><summary>'+(i+1)+'. '+p[0]+'</summary><p></p><p class="notes-muted"></p></details>').join('');[...c.querySelectorAll('details')].forEach((d,i)=>{d.querySelectorAll('p')[0].textContent=pitfalls[i][1];d.querySelectorAll('p')[1].textContent=pitfalls[i][2]})}
  else if(mode==='personal'){const item=personalReview[selected-1];c.innerHTML='<h4>'+item.title+'</h4>'+item.items.map(x=>'<details open><summary></summary><p></p><p class="notes-muted"></p></details>').join('');[...c.querySelectorAll('details')].forEach((d,i)=>{d.querySelector('summary').textContent=item.items[i][0];d.querySelectorAll('p')[0].textContent=item.items[i][1];d.querySelectorAll('p')[1].textContent=item.items[i][2]})}
  else if(mode==='questions'){c.innerHTML='<h4>考研式精读练习</h4><p class="notes-muted">优先训练论证骨架、作者态度、段落功能与逻辑关系。先独立作答，再展开解析。</p>'+questions.map((q,i)=>'<details class="article43-question"><summary>第'+(i+1)+'题 · '+q.q+'</summary><div class="q-options"></div><button class="study-quiz-submit">查看答案与选项分析</button><div class="q-feedback" hidden></div></details>').join('');[...c.querySelectorAll('.article43-question')].forEach((d,i)=>{const q=questions[i],box=d.querySelector('.q-options');q.opts.forEach((o,j)=>{const label=document.createElement('label');label.className='study-quiz-option';const input=document.createElement('input');input.type='radio';input.name='a43q'+i;input.value=String(j);const span=document.createElement('span');span.textContent='ABCD'[j]+'. '+o;label.append(input,span);box.append(label)});d.querySelector('button').onclick=()=>{const fb=d.querySelector('.q-feedback');fb.hidden=false;const picked=d.querySelector('input:checked');fb.innerHTML='';const h=document.createElement('h4');h.textContent='正确答案：'+'ABCD'[q.a]+(picked?(Number(picked.value)===q.a?' · 你的选择正确':' · 你的选择不正确'):' · 尚未作答');fb.append(h);const p=document.createElement('p');p.textContent=q.why;fb.append(p);q.analyses.forEach((a,j)=>{const det=document.createElement('details');const sm=document.createElement('summary');sm.textContent='选项 '+'ABCD'[j]+' · '+(j===q.a?'正确项':'干扰项');const tx=document.createElement('p');tx.textContent=a;det.append(sm,tx);fb.append(det)});d.querySelectorAll('input').forEach(x=>x.disabled=true);d.querySelector('button').disabled=true;d.querySelector('button').textContent='解析已展开'}})}
 }
 root.querySelectorAll('.study-side-tab').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;root.dataset.sideMode=mode;draw()});draw();
}
window.renderStudyNotes=function(){const title=document.getElementById('articleTitle')?.textContent||'';if(title.toLowerCase().includes('university-for-all harms poor students'))return render43();if(previousRender) return previousRender();};
})();
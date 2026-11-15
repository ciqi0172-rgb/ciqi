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
{q:"Q1 | Paragraphs 1–4: How does the author establish the claim that educational standards are declining?",opts:[
"The author relies mainly on teachers' subjective complaints and treats them as proof that every student's abilities are deteriorating.",
"The author moves from teachers' concrete observations to test evidence, while distinguishing the performance of top students from the growing number with weak basic skills.",
"The author identifies the pandemic as the sole cause of declining standards and uses international tests to prove its effects.",
"The author mainly seeks to show that standardized tests are unfair to minority students and should therefore be abandoned."
],a:1,why:"第1段先回应“教师只是主观抱怨”的可能质疑；第2段列出基础知识、阅读理解等具体表现；第3段以测试数据支持问题确实存在，同时用 The best... but... 区分顶尖学生与基础技能薄弱者；第4段才转向可能原因。",analyses:[
"A 把“并非只是教师主观臆想”读反了，也把 a growing number 夸大成 every student。",
"B 正确。它概括了从现象、数据到限定性判断的证据链，既不忽略数据，也不把局部趋势扩大成全体退步。",
"C 疫情只是一个解释；原文明确指出疫情前学校成绩已经下滑。",
"D 把第4段中 Some believe 引出的他人观点偷换成作者的核心目的，且忽略前面三个段落。"
]},
{q:"Q2 | Paragraphs 4–6: Which statement best describes the author's treatment of the causes and consequences of declining standards?",opts:[
"The author regards lower university entry requirements as a necessary price for educational fairness and sees little reason to question them.",
"The author attributes the problem entirely to lower university admission standards and argues that restoring tests would automatically solve it.",
"The author presents several possible causes and then traces a chain of costs, including resources diverted to remedial teaching, dropout risks, and pressure to lower standards further.",
"The author argues that students with weak basic skills do not deserve access to higher education because they hold back stronger students."
],a:2,why:"第4段呈现多个可能原因，并非单因解释；第5段用 The costs of all this 转向后果，依次讨论补基础挤占资源、准备不足者辍学风险、院校进一步降低要求，以及成绩膨胀和AI作弊。作者批评制度应对方式，不是把责任简单推给弱势学生。",analyses:[
"A 将文中被报告的公平性理由误当成作者认可的结论。",
"B 用 entirely 和 automatically 夸大因果；作者提出的是多层面原因和解决方向，不是单一考试万能论。",
"C 正确。它抓住原因的多元性和第5段明确展开的连锁成本。",
"D 把“资源可能被挤占”偷换成对弱势学生价值的否定；作者结尾强调教育应为每个人提供机会。"
]},
{q:"Q3 | Paragraphs 5–7: What is the main function of the Harvard example concerning limits on A grades?",opts:[
"It proves that grade inflation is caused entirely by student cheating and can be addressed only through stricter discipline.",
"It shows that students at elite universities have fallen to the same basic skill level as typical ten-year-olds.",
"It turns the call to restore academic standards into a concrete proposal concerning both admission and assessment practices.",
"It suggests that only Harvard can control grade inflation and that other universities should not attempt similar reforms."
],a:2,why:"第5段指出 grade inflation 是新问题之一；第7段提出大学恢复高标准，并从招生测试转向评分制度，哈佛限制每门课A等级成绩数量是具体例子。24%到60%是A等级成绩占全部成绩的比例，用来说明高分普遍化，而非学生人数或奖学金比例。",analyses:[
"A 把成绩膨胀与AI作弊混为一谈；原文将两者并列为不同问题。",
"B 将第3段关于部分学生基础技能薄弱的数据错误移接到哈佛学生身上。",
"C 正确。例子将“恢复标准”落实为评分机制改革，并由数据解释改革背景。",
"D 原文说这种提议 ought to be more common，恰恰认为它应当更普遍，而非只适用于哈佛。"
]},
{q:"Q4 | Paragraphs 6–8: Why does the author advocate restoring academic standards while also emphasizing apprenticeships and community colleges?",opts:[
"The author believes university education has little value and should be replaced by vocational training.",
"The author seeks to reconcile standards with access: universities should not rely on lower requirements to enroll students, and society should offer varied routes for continued learning.",
"The author claims that declining community-college enrollment directly causes the rise in four-year university enrollment and therefore calls for compulsory transfer to community colleges.",
"The author regards vocational routes as suitable only for academically weak students and unrelated to educational fairness."
],a:1,why:"第7段要求大学恢复招生和考核标准；第8段随即指出大学以外的选择太少，并用学徒制和社区大学说明替代路径不足。两段共同表达的不是关门，而是既保留标准，也扩充可行的学习选择。原文对两种入学比例的对照没有建立直接因果。",analyses:[
"A 把拓宽选择偷换成取代大学；原文没有否定四年制大学。",
"B 正确。它综合了标准和路径多样性两条线索，也为第9段的教育公平结论作铺垫。",
"C 把同时发生的相反趋势写成直接因果，并擅自加入强制改读的政策。",
"D 把职业教育污名化为只适合能力较差者，原文没有这样的价值判断。"
]},
{q:"Q5 | Paragraphs 7–9: Which statement best captures the author's view of educational fairness?",opts:[
"Fairness is achieved once everyone can enter a higher level of education, even if students acquire the necessary skills only afterward.",
"Academic standards should be abolished because any form of selection necessarily disadvantages students from less fortunate backgrounds.",
"Genuine educational fairness requires both access and the skills needed to benefit from that access; advancing students without adequate preparation creates only the appearance of fairness.",
"Racial equity and academic standards are incompatible, so policymakers must choose one over the other."
],a:2,why:"第8段显示大学以外的路径选择不足，第9段进一步区分“给机会”与“不给必要技能却把学生推向更高层级”。作者批评的是缺乏准备和支持的表面晋升，而不是反对帮助弱势学生或追求种族公平。",analyses:[
"A 把必要技能推迟到入学之后，忽略 without granting them the skills they need 对整句的限定。",
"B 把教育公平直接等同于取消标准，与第7段主张恢复高标准相反。",
"C 正确。它整合了文章对机会、标准、技能支持的整体立场，避免把公平与质量设为二选一。",
"D 原文明确否定这种二选一：不提供技能却让学生升入更高层级，既不务实，也不是推动种族公平的举措。"
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
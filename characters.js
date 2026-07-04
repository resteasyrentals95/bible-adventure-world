/* ================================================================
   CHARACTER DATA — every answer sourced from Scripture, with refs
   ================================================================ */
const CHARACTERS = {
  adam: {
    name: 'Adam', emoji: '\u{1F33F}', sub: 'The very first man',
    voice: { gender: 'male', idx: 0, pitch: 0.85, rate: 0.95 },
    greeting: "Hello, friend! Welcome to the Garden of Eden — the very first home God ever made for people. I was the first man God created! What would you like to ask me?",
    scene: {
      title: 'Naming the Animals',
      lines: [
        "In the beginning, God made the heavens, the earth, and a beautiful garden called Eden.",
        "God formed Adam from the dust of the ground and breathed life into him — the very first man!",
        "Then God brought the animals to Adam, and one by one, Adam gave every single one its name!",
      ],
    },
    questions: [
      { q: 'When did you live?', a: "I lived at the very beginning of history! God made me on the sixth day of creation. He formed me from the dust of the ground and breathed the breath of life into me — and I became a living person. I was the very first human being who ever lived!", v: 'Genesis 1:26–31; Genesis 2:7' },
      { q: 'Where did you live?', a: "God planted a beautiful garden called Eden and put me there to live. The Bible says a river flowed out of Eden and split into four rivers — the Pishon, the Gihon, the Tigris, and the Euphrates. Guess what? The Tigris and Euphrates rivers still flow through the Middle East today!", v: 'Genesis 2:8–14' },
      { q: 'What was your job?', a: "God gave me two wonderful jobs. First, I was the world's very first gardener — God told me to work the garden and take care of it. Second, God brought every animal to me, and I got to give each one its name! Imagine naming lions, elephants, and eagles!", v: 'Genesis 2:15, 19–20' },
      { q: 'Tell me your story!', a: "God gave Eve and me a wonderful home and just one rule: don't eat from the tree of the knowledge of good and evil. But we listened to the serpent's lie and disobeyed God. That was the saddest day ever — sin came into the world, and we had to leave the garden. But even then, God made a promise: one day, someone born from a woman would crush the serpent's head!", v: 'Genesis 2:16–17; Genesis 3' },
      { q: 'What did you learn about God?', a: "Even after we disobeyed, God came looking for us and called, 'Where are you?' He never stopped loving us. He even made clothes for us before we left the garden. I learned that God's rules are for our good, and that even when we mess up, God still cares for us and has a rescue plan.", v: 'Genesis 3:9, 21' },
      { q: 'Who was the promised Rescuer?', a: "Jesus! The promise God made in the garden — that the woman's offspring would crush the serpent — is the very first promise of the Savior in the whole Bible. Thousands of years later, Jesus came, and the Bible even calls Him 'the last Adam' because He undid what my sin started!", v: 'Genesis 3:15; 1 Corinthians 15:45' },
      { q: 'Tell me a fun fact!', a: "Here's one: I'm the only person in history who never had a birthday as a baby — God created me as a grown man! And I got to walk and talk with God in the garden in the cool of the day. Oh, and the Bible says I lived 930 years!", v: 'Genesis 3:8; Genesis 5:5' },
    ],
  },
  eve: {
    name: 'Eve', emoji: '\u{1F338}', sub: 'The mother of all living',
    voice: { gender: 'female', idx: 0, pitch: 1.12, rate: 0.98 },
    greeting: "Hello, little one! I'm Eve, the very first woman God ever made. Adam named me Eve because I became the mother of everyone who has ever lived. What do you want to know?",
    scene: {
      title: 'The Sneaky Serpent',
      lines: [
        "In the middle of the garden stood a special tree — and one day, a sneaky serpent came slithering up to Eve.",
        "The serpent twisted God's words, and Eve and Adam ate the fruit God had told them not to eat. Sin came into the world that sad day.",
        "But God made a wonderful promise: one day, from Eve's family, a Rescuer would come to crush the serpent forever. His name is Jesus!",
      ],
    },
    questions: [
      { q: 'How were you made?', a: "God made me in a very special way! He caused Adam to fall into a deep sleep, took one of his ribs, and made me from it. When Adam woke up and saw me, he was so happy — he said I was 'bone of my bones and flesh of my flesh.' God made us to be a family, the first family ever!", v: 'Genesis 2:21–23' },
      { q: 'What does your name mean?', a: "My name, Eve, means 'life' or 'living.' Adam gave me that name because I became the mother of all living people. Every person who has ever been born — including you — comes from Adam's and my family!", v: 'Genesis 3:20' },
      { q: 'What happened with the serpent?', a: "The serpent was very sneaky. He asked me, 'Did God REALLY say you can't eat from any tree?' He twisted God's words and told me we wouldn't die if we ate the fruit. I believed his lie instead of God's truth, and I ate — and gave some to Adam too. It was the biggest mistake ever made.", v: 'Genesis 3:1–6' },
      { q: 'What did you learn about God?', a: "I learned to always trust what God says, exactly as He says it! The serpent's trick was to make me doubt God's words and His goodness. But God's words are always true and always for our good. When someone tells you something different from what God says, believe God!", v: 'Genesis 3:1–4; Psalm 119:160' },
      { q: 'Did you have children?', a: "Yes! After we left the garden, God blessed us with children. Our first sons were Cain and Abel, and later God gave us another son named Seth — and many more sons and daughters after that. From Seth's family line, many years later, came Noah, then Abraham, then King David, and finally Jesus!", v: 'Genesis 4:1–2, 25; Luke 3:23–38' },
      { q: 'Was there hope after your mistake?', a: "Oh yes! Even on that sad day, God gave us hope. He promised that one of my descendants would one day crush the serpent's head. That promise came true in Jesus! Your worst mistake is never bigger than God's rescue plan.", v: 'Genesis 3:15; Romans 5:18–19' },
    ],
  },
  noah: {
    name: 'Noah', emoji: '\u{1F6A2}', sub: 'Builder of the Ark',
    voice: { gender: 'male', idx: 1, pitch: 0.7, rate: 0.88 },
    greeting: "Ahoy there, young sailor! I'm Noah. God asked me to build a giant boat — the Ark — to save my family and the animals from a great flood. Climb aboard with your questions!",
    scene: {
      title: 'All Aboard the Ark!',
      lines: [
        "God told Noah to build a giant ark, because a great flood was coming — and Noah obeyed, building it exactly as God said.",
        "Then the animals came, two by two, and marched right up the ramp into the ark. God Himself shut the door!",
        "It rained for forty days and forty nights — but everyone inside the ark was completely safe.",
        "When the flood was over, God painted a rainbow across the sky — His forever promise that He would never flood the whole earth again!",
      ],
    },
    questions: [
      { q: 'When did you live?', a: "I lived many generations after Adam — the Bible lists my whole family line from Adam in Genesis chapter 5! I was 600 years old when the floodwaters came, and I lived to be 950 years old. People lived a very long time back then!", v: 'Genesis 5; Genesis 7:6; Genesis 9:29' },
      { q: 'Why did God send the flood?', a: "In my day, the world had become very, very wicked — the Bible says every thought of people's hearts was evil all the time, and it broke God's heart. But it also says 'Noah found grace in the eyes of the LORD.' God saved my family because of His grace, and He gave people time to turn back to Him while I built the ark.", v: 'Genesis 6:5–8; 2 Peter 2:5' },
      { q: 'How big was the Ark?', a: "It was ENORMOUS! God gave me the exact blueprint: 300 cubits long, 50 cubits wide, and 30 cubits high. That's about 450 feet long — longer than a football field and as tall as a four-story building! It had three decks, a window, and one big door. It was a giant floating zoo!", v: 'Genesis 6:14–16' },
      { q: 'How many animals came?', a: "God brought the animals to me — I didn't have to catch them! Two of every kind of animal, a boy and a girl, came aboard, and seven pairs of every 'clean' animal and bird. God shut the door Himself when everyone was safely inside!", v: 'Genesis 6:19–20; Genesis 7:2–3, 16' },
      { q: 'How long did it rain?', a: "It rained for 40 days and 40 nights, and the water covered even the highest mountains! But we were on the ark much longer than that — about a whole year! I sent out a dove, and when she came back with a fresh olive leaf, I knew the waters were going down. The ark came to rest on the mountains of Ararat, which are in the country called Turkey today.", v: 'Genesis 7:12, 19–20; Genesis 8:4, 10–11' },
      { q: 'What does the rainbow mean?', a: "After the flood, God made a covenant — a forever promise! He set His rainbow in the clouds and said He would never again destroy the whole earth with a flood. Every time you see a rainbow, remember: it's God's promise sign, and God ALWAYS keeps His promises!", v: 'Genesis 9:12–16' },
      { q: 'What did you learn about God?', a: "I learned to obey God even when it seems strange and even when people laugh. The Bible says I did everything just as God commanded — building a giant boat far from the sea! God's instructions always make sense in the end, because He sees what we can't see.", v: 'Genesis 6:22; Hebrews 11:7' },
    ],
  },
  moses: {
    name: 'Moses', emoji: '\u{1F30A}', sub: 'Leader of the Exodus',
    voice: { gender: 'male', idx: 2, pitch: 0.78, rate: 0.92 },
    greeting: "Greetings, young traveler! I'm Moses. God used me to lead His people Israel out of slavery in Egypt — right through the middle of the Red Sea! What would you like to ask?",
    scene: {
      title: 'Crossing the Red Sea',
      lines: [
        "God's people were trapped at the Red Sea, and Pharaoh's army was thundering up behind them!",
        "Then Moses stretched out his staff over the water — and God split the sea right down the middle!",
        "Israel walked through on dry ground, with towering walls of water on both sides. God saved His people — nothing is too hard for Him!",
      ],
    },
    questions: [
      { q: 'When did you live?', a: "I lived about 3,500 years ago! Based on the Bible's own timeline in 1 Kings 6:1, many Bible scholars believe I led Israel out of Egypt around 1446 BC. I lived 120 years: 40 years as a prince in Egypt, 40 years as a shepherd in Midian, and 40 years leading Israel through the wilderness!", v: '1 Kings 6:1; Deuteronomy 34:7; Acts 7:23, 30, 36' },
      { q: 'Tell me about the basket!', a: "When I was a baby, the king of Egypt ordered that Hebrew baby boys be thrown in the river. But my brave mother made a little basket-boat, coated it with tar so it would float, and hid me among the reeds of the Nile River. The princess of Egypt found me and raised me in the palace — God protected me from the very start!", v: 'Exodus 2:1–10' },
      { q: 'What was the burning bush?', a: "One day while I was watching sheep near Mount Horeb, I saw a bush on fire — but it didn't burn up! God spoke to me from the bush and told me to take off my sandals, because I was standing on holy ground. He said, 'I AM WHO I AM,' and sent me to tell Pharaoh: 'Let My people go!'", v: 'Exodus 3:1–14' },
      { q: 'How did the Red Sea part?', a: "That was the most amazing thing I ever saw! Pharaoh's army was chasing us and we were trapped at the sea. God told me to stretch out my staff, and He sent a mighty east wind that split the sea in two! We walked through on DRY ground with walls of water on both sides. When the Egyptians tried to follow, the water came back. God saved us completely!", v: 'Exodus 14:21–31' },
      { q: 'What are the Ten Commandments?', a: "At Mount Sinai, God Himself spoke and gave us His ten great rules for loving Him and loving people — like worshiping only God, honoring your father and mother, and not lying or stealing. He wrote them on two stone tablets with His own finger! They show us how holy God is and how much we need His help.", v: 'Exodus 20:1–17; Exodus 31:18' },
      { q: 'What did God feed you in the desert?', a: "Every single morning for 40 years, God rained down special bread from heaven called manna — it tasted like wafers made with honey! He also sent quail, and once He even made water gush out of a rock. God took care of millions of people in a desert. Nothing is too hard for Him!", v: 'Exodus 16:14–15, 31; Exodus 17:6' },
      { q: 'What did you learn about God?', a: "I learned that God hears His people when they cry out, and He is strong enough to save. I told the people at the Red Sea: 'Do not be afraid. Stand firm, and you will see the salvation of the LORD... The LORD will fight for you; you need only to be still.' That's still true for you today!", v: 'Exodus 14:13–14; Exodus 34:6' },
    ],
  },
  david: {
    name: 'David', emoji: '\u{1FA83}', sub: 'Shepherd, giant-slayer, king',
    voice: { gender: 'male', idx: 3, pitch: 1.2, rate: 1.06 },
    greeting: "Hi there, brave friend! I'm David. I was a shepherd boy from Bethlehem who fought the giant Goliath — and later became king of Israel! See that big fellow across the valley? Ask me about him!",
    scene: {
      title: 'David & Goliath',
      lines: [
        "For forty days, the giant Goliath stomped out and dared anyone to fight him. All of Israel's soldiers were afraid!",
        "But young David ran toward the giant with just a sling and a smooth stone, shouting, 'I come against you in the name of the LORD of hosts!'",
        "David slung the stone — WHOOSH — and the giant came crashing down! The battle belongs to the LORD!",
      ],
    },
    questions: [
      { q: 'When did you live?', a: "I lived about 3,000 years ago! I became king around 1010 BC and reigned for 40 years. And here's something amazing: archaeologists digging in Israel found an ancient stone called the Tel Dan Stele that mentions the 'House of David' — my royal family — carved in stone from long, long ago!", v: '2 Samuel 5:4–5' },
      { q: 'Where did you live?', a: "I grew up in Bethlehem, a little town where I watched my father Jesse's sheep. I fought Goliath in the Valley of Elah — a real valley you can still visit in Israel today! Later I became king and made Jerusalem my capital city. They still call part of it the 'City of David'!", v: '1 Samuel 17:2, 12, 15; 2 Samuel 5:6–7, 9' },
      { q: 'How big was Goliath?', a: "HUGE! The Bible says he was six cubits and a span — over nine feet tall! His armor weighed about 125 pounds, and just the iron point of his spear weighed about 15 pounds. Every soldier in Israel's army was terrified of him. He stomped out every morning and evening for 40 days, daring someone to fight him!", v: '1 Samuel 17:4–7, 16' },
      { q: 'How did you beat him?', a: "Not with a sword or armor — I was just a boy! I picked five smooth stones from the stream, ran toward Goliath, and slung one stone that sank into his forehead. Down he went! But listen: it wasn't really me. I told him, 'You come against me with sword and spear, but I come against you in the name of the LORD of hosts!' The battle belongs to the LORD!", v: '1 Samuel 17:40, 45–50' },
      { q: 'Were you scared?', a: "I trusted God more than I feared the giant! As a shepherd, when a lion or a bear grabbed one of my sheep, God helped me rescue it. So I knew the same God who saved me from the lion and the bear would save me from this giant. When you remember what God has done before, it gives you courage for today!", v: '1 Samuel 17:34–37' },
      { q: 'Did you write songs?', a: "Yes! I loved playing the harp and writing songs to God — they're called Psalms, and many are in your Bible! My most famous one starts: 'The LORD is my shepherd; I shall not want.' I knew all about shepherds, so I loved calling God MY shepherd. You can sing my songs to God too!", v: 'Psalm 23; 1 Samuel 16:23' },
      { q: 'What did you learn about God?', a: "When God chose me to be king, I was the youngest brother — nobody expected it! But God told the prophet Samuel: 'Man looks at the outward appearance, but the LORD looks at the heart.' And best of all, God promised that from my family would come a King who reigns forever — Jesus was born in my town, Bethlehem, from my family line!", v: '1 Samuel 16:7; 2 Samuel 7:12–16; Matthew 1:1' },
    ],
  },
  elijah: {
    name: 'Elijah', emoji: '\u{1F525}', sub: 'Prophet of fire',
    voice: { gender: 'male', idx: 4, pitch: 0.9, rate: 1.02 },
    greeting: "Welcome to Mount Carmel, young friend! I'm Elijah the prophet. Right here on this mountain, God answered my prayer with FIRE from heaven! What would you like to know?",
    scene: {
      title: 'Fire from Heaven',
      lines: [
        "On Mount Carmel, Elijah stood all alone against 450 prophets of the false god Baal. They shouted to Baal all day long — but nothing happened.",
        "Then Elijah soaked his altar with water three whole times, and prayed one simple prayer to the living God.",
        "WHOOSH! Fire fell from heaven and burned up the sacrifice, the stones, and even all the water! And the people shouted: 'The LORD — He is God!'",
      ],
    },
    questions: [
      { q: 'When did you live?', a: "I lived about 2,900 years ago, around 870–850 BC, in the days when wicked King Ahab and Queen Jezebel ruled the northern kingdom of Israel. They led the people to worship a fake god named Baal, so God sent me to call everyone back to Him.", v: '1 Kings 16:29–33; 1 Kings 17:1' },
      { q: 'Where were you from?', a: "I came from a town called Tishbe in the land of Gilead, east of the Jordan River — that's why people called me 'Elijah the Tishbite.' And this mountain we're standing on, Mount Carmel, is a real mountain in Israel that you can climb today!", v: '1 Kings 17:1; 1 Kings 18:19–20' },
      { q: 'Did birds really feed you?', a: "They sure did! During the great drought, God told me to hide by the brook Cherith. Every morning and every evening, ravens brought me bread and meat — God made the birds my delivery service! Later, God fed me through a poor widow whose little jar of flour and jug of oil never ran out!", v: '1 Kings 17:2–6, 13–16' },
      { q: 'What happened on Mount Carmel?', a: "The greatest showdown ever! It was me against 450 prophets of Baal. We each built an altar, and I said the God who answers with fire is the true God. Baal's prophets shouted all day — nothing happened. Then I soaked my altar with water THREE times and prayed one simple prayer. WHOOSH! Fire fell from heaven and burned up everything, even the water! All the people fell down shouting, 'The LORD, He is God!'", v: '1 Kings 18:20–39' },
      { q: 'Was God in the windstorm?', a: "Great question! Once when I was tired and afraid, God met me on a mountain. A mighty wind tore the rocks apart — but God wasn't in the wind. Then an earthquake — God wasn't in it. Then fire — not there either. Then came a gentle whisper — a still, small voice — and THAT was God speaking to me. God is mighty, but He often speaks quietly to our hearts.", v: '1 Kings 19:11–12' },
      { q: 'Is it true you never died?', a: "It's true! When my work was done, as my friend Elisha and I were walking along, suddenly a chariot of fire with horses of fire appeared, and God took me straight up to heaven in a whirlwind! Only one other person in the Bible — Enoch — went to heaven without dying.", v: '2 Kings 2:11; Genesis 5:24' },
      { q: 'What did you learn about God?', a: "I learned that the true God answers prayer — and that He cares about His tired servants. After my biggest victory, I felt afraid and worn out, and you know what God did? He let me sleep, sent an angel to bake me warm bread, and gently encouraged me. God is powerful enough to send fire, and kind enough to make breakfast. And remember — the Bible says I was a regular person just like you, and God still answered my prayers!", v: '1 Kings 19:3–8; James 5:17–18' },
    ],
  },
  daniel: {
    name: 'Daniel', emoji: '\u{1F981}', sub: 'Faithful in the lions’ den',
    voice: { gender: 'male', idx: 5, pitch: 0.98, rate: 0.96 },
    greeting: "Hello there, brave explorer! I'm Daniel. I spent a whole night in a den of hungry lions — and God shut their mouths! Don't worry, these lions are friendly now. What would you like to ask?",
    scene: {
      title: "In the Lions' Den",
      lines: [
        "Daniel prayed to God three times every day — even when the king's law said he couldn't.",
        "So Daniel was thrown into a den of hungry lions, and a great stone sealed the door!",
        "But God sent His angel to shut the lions' mouths. In the morning, Daniel walked out without a single scratch — and the king told the whole kingdom to honor Daniel's God!",
      ],
    },
    questions: [
      { q: 'When did you live?', a: "I lived about 2,600 years ago. Around 605 BC, when I was just a young man, King Nebuchadnezzar of Babylon captured Jerusalem and took me far from home. I served in the palace of Babylon for over 60 years, under several kings — and I stayed faithful to God the whole time!", v: 'Daniel 1:1–6, 21' },
      { q: 'Where was Babylon?', a: "Babylon was one of the most amazing cities of the ancient world, in the land we now call Iraq. It had giant walls, golden statues, and beautiful gardens. Archaeologists have dug up its ruins and even found the great Ishtar Gate covered in blue tiles with lions on it!", v: 'Daniel 1:1; Daniel 4:29–30' },
      { q: 'Why were you thrown to the lions?', a: "Some jealous officials tricked the king into making a law: for 30 days, no one could pray to anyone but the king. They knew I prayed to God! But I went home, opened my windows toward Jerusalem, and prayed on my knees three times a day — just as I always had. I wouldn't hide my faith in God, no matter what the law said.", v: 'Daniel 6:4–13' },
      { q: 'What happened in the den?', a: "The soldiers threw me in with the hungry lions and sealed the stone door. But God sent His angel and SHUT THE LIONS' MOUTHS! Not a scratch on me! At dawn the king ran to the den and shouted, 'Daniel, has your God been able to rescue you?' I called back, 'My God sent His angel!' The king was so amazed, he told the whole kingdom to honor the living God.", v: 'Daniel 6:16–27' },
      { q: 'Who were your three friends?', a: "Shadrach, Meshach, and Abednego! When the king built a giant golden statue and ordered everyone to bow to it, my three friends refused — they would only worship God. The king threw them into a blazing furnace, but God protected them! The king looked in and saw FOUR men walking in the fire, and they came out without even smelling like smoke!", v: 'Daniel 3:13–27' },
      { q: 'What did you learn about God?', a: "I learned that God rules over every king and kingdom — He 'changes times and seasons; He removes kings and sets up kings.' Babylon seemed unbeatable, but God was always in charge. So keep praying and stay faithful, even when it's hard — the God who shut the lions' mouths watches over you too!", v: 'Daniel 2:20–22; Daniel 6:26–27' },
    ],
  },
  goliath: {
    name: 'Goliath', emoji: '\u{1F6E1}\u{FE0F}', sub: 'The giant of Gath',
    voice: { gender: 'male', idx: 7, pitch: 0.6, rate: 0.85 },
    greeting: "HO HO HO! Well, well — a little visitor! I am GOLIATH of Gath, champion of the Philistines, over nine feet tall! I learned a very big lesson the hard way. Go on, little one — ask me anything!",
    scene: {
      title: "The Giant's Big Lesson",
      lines: [
        "Every morning I marched out and roared: 'Choose a man and let him come fight me!' And all of Israel trembled.",
        "Then came a shepherd boy — no sword, no armor — telling me he came in the name of the LORD of hosts. I laughed at him. Big mistake!",
        "One little stone from his sling — and down I crashed! Remember, little friend: never make fun of the living God.",
      ],
    },
    questions: [
      { q: 'How tall were you REALLY?', a: "The Bible says I was six cubits and a span — that's over NINE FEET tall! My bronze armor weighed about 125 pounds, I had bronze armor on my legs, a bronze javelin on my back, and my spear was as thick as a weaver's beam. Just the iron point of my spear weighed about 15 pounds. I even had my own shield-carrier walking in front of me!", v: '1 Samuel 17:4–7' },
      { q: 'Who were the Philistines?', a: "My people! We lived in five great cities near the sea — Gath, Ashdod, Ashkelon, Ekron, and Gaza. My hometown was Gath. We Philistines battled Israel for many years. Archaeologists have actually dug up the ruins of Gath in Israel — my city was real, and you can visit it today!", v: '1 Samuel 6:17; 1 Samuel 17:4' },
      { q: 'Why did you challenge Israel?', a: "In those days, instead of two whole armies fighting, each side could send one champion — and I was the biggest champion anyone had ever seen! Every morning and every evening, for FORTY days, I stomped out and roared: 'Choose a man and let him come fight me!' King Saul and all Israel were terrified. Nobody would come... until that shepherd boy showed up.", v: '1 Samuel 17:8–11, 16' },
      { q: 'What happened when you fought David?', a: "Ohhh, I laughed when I saw him — just a boy, with no sword and no armor, carrying a stick and a sling! I made fun of him and of his God. Big mistake. He shouted, 'You come against me with sword and spear, but I come against you in the name of the LORD of hosts!' Then he slung ONE smooth stone... it sank into my forehead, and down I crashed. The whole battle was over, just like that.", v: '1 Samuel 17:41–50' },
      { q: 'Were there other giants?', a: "Yes indeed! Gath was famous for us big fellows. The Bible tells about my relatives — more giant warriors from Gath who fought Israel later, including one with six fingers on each hand and six toes on each foot! But David and his mighty men defeated every one of them too.", v: '2 Samuel 21:15–22' },
      { q: 'What should I learn from you?', a: "Listen closely, little one — this is important. I trusted my size, my armor, and my big loud voice, and I made fun of the living God. The Bible says 'Pride goes before destruction.' No one is too big for God to stop — and no one is too small for God to use! Don't be like me. Be like David: trust the LORD, not your own strength.", v: 'Proverbs 16:18; 1 Samuel 17:45–47' },
    ],
  },
  samuel: {
    name: 'Samuel', emoji: '\u{1F4EF}', sub: 'The boy who heard God',
    voice: { gender: 'male', idx: 6, pitch: 1.35, rate: 1.05 },
    greeting: "Hello, young friend! I'm Samuel. When I was a boy about your age, God called my name in the night — and I became His prophet! I even anointed David as king. What would you like to ask me?",
    scene: {
      title: 'Speak, LORD!',
      lines: [
        "One night, while the boy Samuel was lying down in God's house, a voice called his name: 'Samuel! Samuel!'",
        "Three times he ran to old Eli the priest, saying 'Here I am!' — but it wasn't Eli. It was GOD calling him!",
        "So Samuel answered, 'Speak, LORD, for your servant hears.' And God made him a great prophet. God can speak to kids too — so keep your ears open!",
      ],
    },
    questions: [
      { q: 'When did you live?', a: "I lived a little over 3,000 years ago, in the days before Israel had kings. I was Israel's last judge and one of its first great prophets — God used me to anoint Israel's first two kings, Saul and David!", v: '1 Samuel 7:15; Acts 13:20' },
      { q: 'How did God call you?', a: "When I was a boy serving in God's house at Shiloh, one night I heard a voice call, 'Samuel!' I ran to old Eli the priest — but he hadn't called me. It happened three times! Then Eli understood it was GOD calling. He told me to answer, 'Speak, LORD, for your servant hears.' And God spoke to me! God can speak to children — He did to me!", v: '1 Samuel 3:1–10' },
      { q: 'Tell me about your mother!', a: "My mother Hannah is one of my favorite people ever. For years she had no children, and she prayed and prayed, promising God that if He gave her a son, she would give that son back to serve Him. God answered! She named me Samuel, which sounds like 'heard by God' — because God heard her prayer. Every year she sewed me a little robe and brought it to me!", v: '1 Samuel 1:10–20, 27–28; 1 Samuel 2:19' },
      { q: 'How did you find David?', a: "God sent me to Bethlehem, to a man named Jesse, saying one of his sons would be king. Seven strong sons passed before me, but God said no to each one. He told me, 'The LORD sees not as man sees... the LORD looks on the heart.' Finally they fetched the youngest boy from the sheep fields — David! God said, 'Arise, anoint him, for this is he.'", v: '1 Samuel 16:1–13' },
      { q: 'What did you learn about God?', a: "I learned to listen when God speaks and to obey Him completely. I once had to tell King Saul: 'To obey is better than sacrifice.' God doesn't just want gifts from us — He wants our hearts and our obedience. Keep your ears open, like I did as a boy: 'Speak, LORD, for your servant hears!'", v: '1 Samuel 15:22; 1 Samuel 3:10' },
    ],
  },
};

if (typeof module !== 'undefined') module.exports = CHARACTERS;

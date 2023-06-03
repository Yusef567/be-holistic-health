const commentsData = [
  {
    quiz_id: 1,
    comment_text:
      "Donec vitae odio eu elit ullamcorper fringilla nec et ipsum.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 1,
    comment_text:
      "Etiam tempor orci at tellus vulputate, at rhoncus justo tristique.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 1,
    comment_text:
      "Aliquam erat volutpat. Suspendisse in pharetra nisi, vitae euismod leo.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 1,
    comment_text:
      "Pellentesque vitae sem ut mi ultrices ultricies non a ligula.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 1,
    comment_text:
      "Vestibulum fermentum ligula ac volutpat lobortis. Quisque auctor eros ac suscipit consectetur.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 1,
    comment_text:
      "Nulla at metus suscipit, faucibus nisl at, consectetur metus.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 1,
    comment_text:
      "Nam maximus ligula eu mauris consectetur, nec consequat nisl sagittis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 1,
    comment_text: "Fusce nec purus ac erat feugiat consequat vitae non elit.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 1,
    comment_text:
      "Vivamus convallis elit eu massa maximus tincidunt vitae non lectus.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 1,
    comment_text:
      "Proin ac magna sit amet nisl bibendum finibus. Aenean eget mauris elit.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 2,
    comment_text:
      "Proin ac magna sit amet nisl bibendum finibus. Aenean eget mauris elit.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 2,
    comment_text:
      "Cras sagittis augue eu lectus malesuada, non eleifend dolor fringilla.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 2,
    comment_text:
      "Pellentesque efficitur diam nec lectus dictum, nec rutrum orci tempor.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 2,
    comment_text:
      "Etiam ullamcorper justo ac tellus consectetur, vitae tristique justo laoreet.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 2,
    comment_text: "Sed a nunc luctus, sollicitudin sem eu, consequat odio.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 2,
    comment_text:
      "Vivamus sed ipsum vel nisi volutpat dignissim sit amet at ante.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 2,
    comment_text: "Integer sed mi id velit dictum scelerisque in sed nunc.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 2,
    comment_text:
      "Donec fringilla orci a mauris convallis, a dignissim sem consectetur.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 2,
    comment_text:
      "Mauris tincidunt mi et massa aliquam, eget consequat est ultricies.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 2,
    comment_text: "Curabitur a ipsum at nunc fermentum rutrum non sed metus.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 3,
    comment_text: "Curabitur a ipsum at nunc fermentum rutrum non sed metus.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 3,
    comment_text:
      "Vestibulum nec ligula at lacus posuere pharetra a quis metus.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 3,
    comment_text:
      "Nam feugiat est a justo consectetur, non facilisis dui sagittis.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 3,
    comment_text:
      "Suspendisse maximus nisl nec libero pulvinar dignissim ac non urna.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 3,
    comment_text:
      "Maecenas tincidunt lacus sit amet eros auctor, non eleifend neque egestas.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 3,
    comment_text:
      "Nullam dignissim nisi ac mi finibus, ut dignissim urna consectetur.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 3,
    comment_text:
      "Praesent ultrices erat in elit volutpat, at molestie ex finibus.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 3,
    comment_text:
      "Curabitur sed turpis et tortor consectetur scelerisque non non augue.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 3,
    comment_text:
      "Fusce consequat magna at leo vulputate, id venenatis orci fringilla.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 3,
    comment_text: "Donec in quam eu erat venenatis feugiat nec a ligula.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 4,
    comment_text:
      "Curabitur sed turpis et tortor consectetur scelerisque non non augue.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 4,
    comment_text:
      "Vestibulum ornare justo nec purus efficitur, ut eleifend lectus aliquam.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 4,
    comment_text:
      "Donec commodo dolor vel metus lacinia, a convallis sapien varius.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 4,
    comment_text:
      "Praesent consectetur tellus vitae lobortis sollicitudin. Nulla facilisi.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 4,
    comment_text:
      "Cras rhoncus nulla eget diam finibus sollicitudin. Curabitur ut suscipit.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 5,
    comment_text:
      "Vestibulum ornare justo nec purus efficitur, ut eleifend lectus aliquam.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 5,
    comment_text: "Nam non justo posuere, dapibus sem eget, venenatis ipsum.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 5,
    comment_text: "Fusce in velit ac dui volutpat rhoncus vitae ac est.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 5,
    comment_text: "Aliquam ut tortor nec nunc cursus dignissim in non mi.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 5,
    comment_text:
      "Sed vulputate dolor a diam tincidunt, id luctus elit varius.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 6,
    comment_text: "Nam non justo posuere, dapibus sem eget, venenatis ipsum.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 6,
    comment_text: "Nullam consectetur magna in hendrerit commodo.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 6,
    comment_text: "In rhoncus tellus sit amet bibendum pellentesque.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 6,
    comment_text:
      "Vivamus malesuada ipsum at libero interdum, eu cursus mi lacinia.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 6,
    comment_text:
      "Duis consectetur nunc a sem rhoncus, a ullamcorper ipsum condimentum.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 6,
    comment_text:
      "Quisque suscipit nulla et leo fringilla, eget pulvinar justo porttitor.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 6,
    comment_text: "Etiam consequat metus at bibendum finibus.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 6,
    comment_text:
      "Praesent faucibus risus ac metus vestibulum, a malesuada nisi efficitur.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 6,
    comment_text: "Vestibulum eleifend nisl vel leo interdum feugiat.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 6,
    comment_text: "Maecenas et ligula nec purus tempor lobortis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 7,
    comment_text:
      "Praesent faucibus risus ac metus vestibulum, a malesuada nisi efficitur.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 7,
    comment_text:
      "Suspendisse commodo ex at elit tincidunt, ut cursus dolor aliquet.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 7,
    comment_text:
      "Etiam pellentesque enim at purus malesuada, eu rutrum erat convallis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 7,
    comment_text: "Nunc at sapien commodo, molestie dui nec, ultricies ligula.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 7,
    comment_text: "Phasellus a sem ac justo gravida rhoncus.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 8,
    comment_text: "Phasellus a sem ac justo gravida rhoncus.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 8,
    comment_text:
      "Aliquam pretium ligula vel metus dapibus, nec facilisis urna hendrerit.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 8,
    comment_text: "Fusce condimentum sapien id tellus feugiat rutrum.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 8,
    comment_text: "Vestibulum in massa nec erat ultricies mattis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 8,
    comment_text:
      "Curabitur tincidunt dolor vel nisi rutrum, at fringilla elit ullamcorper.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 8,
    comment_text: "Sed a metus euismod, aliquam lectus ut, posuere purus.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 8,
    comment_text: "Pellentesque aliquam dui et lorem iaculis congue.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 8,
    comment_text:
      "Vivamus fermentum velit sit amet mauris faucibus, nec ullamcorper ligula cursus.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 8,
    comment_text: "In vel turpis eleifend, feugiat tellus id, ultrices metus.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 8,
    comment_text: "Ut id arcu nec dui consectetur rhoncus ac at justo.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 9,
    comment_text:
      "Aliquam pretium ligula vel metus dapibus, nec facilisis urna hendrerit.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 9,
    comment_text: "Cras non ante volutpat, rhoncus nisi non, accumsan turpis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 9,
    comment_text: "Etiam nec diam id velit iaculis egestas eu ac leo.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 9,
    comment_text:
      "Nullam pharetra purus eu tortor pharetra, eget fringilla nisl aliquet.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 9,
    comment_text: "Pellentesque non velit sed leo facilisis iaculis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 10,
    comment_text: "Etiam nec diam id velit iaculis egestas eu ac leo.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 10,
    comment_text:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vulputate nunc vitae bibendum lacinia.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 10,
    comment_text:
      "Nulla feugiat, nisl in cursus interdum, massa arcu tincidunt enim, in varius felis mi nec lectus.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 10,
    comment_text:
      "Sed aliquam malesuada ultricies. Sed tincidunt metus sit amet ipsum faucibus, ac dignissim tellus vestibulum.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 10,
    comment_text:
      "Integer et mi ut mi accumsan scelerisque. Nulla tristique elit ut iaculis tristique.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 11,
    comment_text: "Etiam nec diam id velit iaculis egestas eu ac leo.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 11,
    comment_text:
      "Donec interdum tortor ac purus varius efficitur. Quisque commodo purus ut ante lobortis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 11,
    comment_text:
      "Curabitur ullamcorper magna non dolor hendrerit, sed pharetra nisl fermentum.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 11,
    comment_text:
      "Fusce dignissim justo vel tellus dapibus, ut posuere lectus tincidunt.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 11,
    comment_text:
      "Pellentesque ut metus in elit consequat elementum. Suspendisse potenti.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 11,
    comment_text:
      "Cras eleifend nulla a lectus bibendum, nec tristique neque tincidunt.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 11,
    comment_text: "Nam eu nunc eu enim fermentum commodo. Duis at nisi urna.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 11,
    comment_text:
      "Integer vitae dolor aliquam, sagittis tortor et, condimentum ipsum.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 11,
    comment_text:
      "Sed vitae nulla in leo commodo pretium. Vivamus eu consectetur diam.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 11,
    comment_text:
      "Phasellus ullamcorper nulla sed risus euismod, et posuere lectus consequat.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 12,
    comment_text:
      "Curabitur ullamcorper magna non dolor hendrerit, sed pharetra nisl fermentum.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 12,
    comment_text:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 12,
    comment_text: "Mauris eu ipsum id enim volutpat facilisis. Nulla facilisi.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 12,
    comment_text:
      "Nam commodo arcu a erat aliquam, eget consectetur nulla fringilla.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 12,
    comment_text:
      "Donec posuere felis a urna rutrum, vitae pellentesque eros facilisis.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 13,
    comment_text: "Mauris eu ipsum id enim volutpat facilisis. Nulla facilisi.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 13,
    comment_text: "Cras eget est non augue mattis lacinia ut in turpis.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 13,
    comment_text:
      "Pellentesque faucibus nunc nec commodo aliquet. Aliquam sollicitudin mauris a tristique.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 13,
    comment_text:
      "In in nisl sit amet ipsum consectetur gravida vitae at ligula.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 13,
    comment_text:
      "Maecenas malesuada metus eget aliquam fermentum. Proin euismod purus non libero sagittis sodales.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 14,
    comment_text: "Cras eget est non augue mattis lacinia ut in turpis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 14,
    comment_text:
      "Vestibulum a lectus id justo consequat facilisis. Curabitur vestibulum fermentum tortor non viverra.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 14,
    comment_text:
      "Nullam convallis ipsum vitae tortor tempor, id ullamcorper mauris varius.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 14,
    comment_text:
      "Phasellus vitae turpis ut turpis pulvinar vestibulum id vitae velit.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 14,
    comment_text:
      "Duis consequat mi eget nisi cursus efficitur. Suspendisse sed tortor purus.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 15,
    comment_text:
      "Vestibulum a lectus id justo consequat facilisis. Curabitur vestibulum fermentum tortor non viverra.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 15,
    comment_text: "Maecenas at neque eu dolor efficitur finibus at nec metus.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 15,
    comment_text:
      "Vivamus gravida augue a dapibus malesuada. Pellentesque id odio id tortor aliquam condimentum.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 15,
    comment_text:
      "Nam sagittis arcu id dui hendrerit commodo. Proin dictum semper metus vel viverra.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 15,
    comment_text:
      "Sed pretium metus sed dui efficitur, id facilisis turpis facilisis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 16,
    comment_text:
      "Vestibulum a lectus id justo consequat facilisis. Curabitur vestibulum fermentum tortor non viverra.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 16,
    comment_text:
      "Sed eu nulla sit amet sapien pharetra convallis eu a tellus.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 16,
    comment_text: "Fusce a libero a enim placerat finibus sed a orci.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 16,
    comment_text:
      "Pellentesque non tortor in felis eleifend bibendum non non turpis.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 16,
    comment_text:
      "Vivamus eleifend metus nec justo tincidunt, a cursus risus feugiat.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 17,
    comment_text:
      "Pellentesque non tortor in felis eleifend bibendum non non turpis.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 17,
    comment_text:
      "Pellentesque venenatis urna vitae luctus hendrerit. Nulla facilisi.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 17,
    comment_text:
      "Vestibulum tincidunt velit nec feugiat consequat. Morbi scelerisque purus in dolor iaculis consequat.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 17,
    comment_text:
      "In ac turpis commodo, placerat urna at, vehicula velit. Aenean feugiat mi eget massa finibus placerat.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 17,
    comment_text:
      "Phasellus vel mauris a tellus semper ultrices. Vestibulum ut nisl consequat, fermentum eros in, lobortis elit.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 18,
    comment_text:
      "In ac turpis commodo, placerat urna at, vehicula velit. Aenean feugiat mi eget massa finibus placerat.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 18,
    comment_text:
      "Vivamus sed eros eget massa congue finibus vitae a dolor. Nullam commodo tortor vel metus semper dapibus.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 18,
    comment_text:
      "Fusce feugiat leo nec metus consequat, sed finibus massa dictum. Nullam feugiat eros nec nulla facilisis tincidunt.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 18,
    comment_text:
      "Quisque eget purus volutpat, lacinia mauris id, finibus metus. Mauris tempor ipsum et aliquam accumsan.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 18,
    comment_text:
      "Suspendisse eget elit sed sem lacinia ullamcorper. Fusce in mi at dolor pharetra vestibulum.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 19,
    comment_text:
      "Vivamus sed eros eget massa congue finibus vitae a dolor. Nullam commodo tortor vel metus semper dapibus.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 19,
    comment_text:
      "Pellentesque non tortor in felis eleifend bibendum non non turpis.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 19,
    comment_text:
      "In ac turpis commodo, placerat urna at, vehicula velit. Aenean feugiat mi eget massa finibus placerat.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 19,
    comment_text:
      "Nunc vel turpis sit amet urna rhoncus rutrum vitae sed lorem.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 19,
    comment_text:
      "Nullam sed lectus sed felis bibendum consequat. Mauris vitae bibendum lorem.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 20,
    comment_text:
      "Pellentesque non tortor in felis eleifend bibendum non non turpis.",
    user_id: 3,
    username: "Matt",
  },
  {
    quiz_id: 20,
    comment_text:
      "Pellentesque non tortor in felis eleifend bibendum non non turpis.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 20,
    comment_text:
      "In ac turpis commodo, placerat urna at, vehicula velit. Aenean feugiat mi eget massa finibus placerat.",
    user_id: 2,
    username: "Joe",
  },
  {
    quiz_id: 20,
    comment_text:
      "Vestibulum aliquet enim eu enim consectetur, a condimentum justo viverra.",
    user_id: 1,
    username: "David",
  },
  {
    quiz_id: 20,
    comment_text:
      "Maecenas volutpat erat et turpis tincidunt auctor. Etiam sed ipsum velit.",
    user_id: 2,
    username: "Joe",
  },
];

export default commentsData;

interface Like {
  content_id: number;
  content_type: string;
  user_id: number;
}

const likesData: Like[] = [];

for (let contentId = 1; contentId < 5; contentId++) {
  likesData.push(
    { content_id: contentId, content_type: "quiz", user_id: 1 },
    { content_id: contentId, content_type: "quiz", user_id: 2 },
    { content_id: contentId, content_type: "quiz", user_id: 3 }
  );
}

for (let contentId = 5; contentId < 10; contentId++) {
  likesData.push(
    { content_id: contentId, content_type: "quiz", user_id: 1 },
    { content_id: contentId, content_type: "quiz", user_id: 2 }
  );
}

for (let contentId = 10; contentId <= 20; contentId++) {
  likesData.push(
    { content_id: contentId, content_type: "quiz", user_id: 1 },
    { content_id: contentId, content_type: "quiz", user_id: 2 },
    { content_id: contentId, content_type: "quiz", user_id: 3 }
  );
}

for (let contentId = 1; contentId < 30; contentId += 2) {
  likesData.push(
    { content_id: contentId, content_type: "comment", user_id: 1 },
    { content_id: contentId, content_type: "comment", user_id: 2 },
    { content_id: contentId, content_type: "comment", user_id: 3 }
  );
}

for (let contentId = 30; contentId <= 130; contentId += 2) {
  likesData.push(
    { content_id: contentId, content_type: "comment", user_id: 1 },
    { content_id: contentId, content_type: "comment", user_id: 2 },
    { content_id: contentId, content_type: "comment", user_id: 3 }
  );
}

export default likesData;

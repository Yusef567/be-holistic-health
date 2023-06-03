"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const likesData = [];
for (let contentId = 1; contentId < 5; contentId++) {
    likesData.push({ content_id: contentId, content_type: "quiz", user_id: 1 }, { content_id: contentId, content_type: "quiz", user_id: 2 }, { content_id: contentId, content_type: "quiz", user_id: 3 });
}
for (let contentId = 5; contentId < 10; contentId++) {
    likesData.push({ content_id: contentId, content_type: "quiz", user_id: 1 }, { content_id: contentId, content_type: "quiz", user_id: 2 });
}
for (let contentId = 10; contentId <= 20; contentId++) {
    likesData.push({ content_id: contentId, content_type: "quiz", user_id: 1 }, { content_id: contentId, content_type: "quiz", user_id: 2 }, { content_id: contentId, content_type: "quiz", user_id: 3 });
}
for (let contentId = 1; contentId < 30; contentId += 2) {
    likesData.push({ content_id: contentId, content_type: "comment", user_id: 1 }, { content_id: contentId, content_type: "comment", user_id: 2 }, { content_id: contentId, content_type: "comment", user_id: 3 });
}
for (let contentId = 30; contentId <= 130; contentId += 2) {
    likesData.push({ content_id: contentId, content_type: "comment", user_id: 1 }, { content_id: contentId, content_type: "comment", user_id: 2 }, { content_id: contentId, content_type: "comment", user_id: 3 });
}
exports.default = likesData;

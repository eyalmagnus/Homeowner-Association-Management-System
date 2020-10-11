class messageModel {
    constructor(title, details, priority, picture, createdBy, createdAt, comments, readBy) {
        this.title = title;
        this.details = details;
        this.priority = priority;
        this.picture = picture;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.comments = comments;
        this.readBy = readBy;
    }

}

export default messageModel;

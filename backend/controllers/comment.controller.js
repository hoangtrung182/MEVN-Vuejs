const { Comment } = require("../model/model");


const CommentController = {
    addComment: async (req, res) => {
        try {
            // const { content, user, date } = req.body;
            // const newCmt = await Comment.create({ content: content, user: user, date: '2017-01-01'});
            const { id } = req.params;
            const { content, user, date} = req.body;
            const newCmt = await Comment.create({ content, user, date, productItem: id });
            res.status(200).json({ cmt: newCmt});
        } catch (error) {
            res.status(500).json({ msg: error});
        }
    },
    getAllComments: async (req, res) => {
        try {
            const allComments = await Comment.find();
            res.status(200).json(allComments);
        } catch (error) {
            res.status(500).json({ msg: error});
        }
    }
}

module.exports = CommentController;
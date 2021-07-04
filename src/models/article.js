const { models, model, Schema } = require('mongoose')

const schema = new Schema({
   preview: {
      type: String
   },
   title: {
      type: String,
      required: true
   },
   tags: {
      type: [{
         type: String
      }],
      default: []
   }
   // Как должно быть
   // author: {

   // }
   // category: {

   // },
   // tags: {
   //    type: [{
   //       ref: 'Tag'
   //    }],
   //    default: []
   // }
   // content: {
   //    ref: 'FeedContent'
   // }
}, {
  timestamps: true
})

module.exports = models.Feed || model('Article', schema)

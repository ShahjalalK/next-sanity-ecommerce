import { Rule, SchemaTypeDefinition } from "sanity";

const product : SchemaTypeDefinition = ({
    name : 'product',
    title : 'Products',
    type : 'document',
    fields : [
        {
            name : 'images',
            title : 'Images',
            type : 'array',
            of : [
                {
                  type : 'image',
                  options : {
                    hotspot : true
                  }
                }
            ]
        } ,
        {
            name : 'title',
            title : 'Title',
            type : 'string',
            validation : (rule : Rule) => rule.required()
        },
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options : {
                source : 'title',
                maxLength : 90
            },
            validation : (rule : Rule) => rule.required()            
        } ,        
        {
            name : 'category',
            title : 'Category',
            type : 'array',
            of : [
                {
                    type : 'reference', to : [{type : 'category'}]
                }
            ]
        }      
        
    ],
    preview : {select : {title : 'title', media : 'images.0.asset'}}
})

export default product
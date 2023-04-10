import { Rule, SchemaTypeDefinition } from "sanity";

const category : SchemaTypeDefinition = ({
    name : 'category',
    title : 'Categories',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string',
            validation : (rule : Rule) => rule.required()
        },
        {
            name : 'slug',
            title : 'slug',
            type : 'slug',
            options : {
                source : 'name',
                maxLength : 90
            },
            validation : (rule : Rule) => rule.required(),
            
        },
        {
            name : 'description',
            title : 'Description',
            type : 'array',
            of : [{type : 'block'}]

        },
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            },
            validation : (rule : Rule) => rule.required()
        }
    ]
})

export default category
/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

const metadata = {
    models: {
        habitGroup: {
            name: 'HabitGroup', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    isOptional: true,
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, isDeleted: {
                    name: "isDeleted",
                    type: "Boolean",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }, { "name": "@omit", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, sort: {
                    name: "sort",
                    type: "Int",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": 999 }] }],
                }, color: {
                    name: "color",
                    type: "String",
                    isOptional: true,
                }, children: {
                    name: "children",
                    type: "HabitItem",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'group',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }] }],
        }
        ,
        habitItem: {
            name: 'HabitItem', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    isOptional: true,
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, isDeleted: {
                    name: "isDeleted",
                    type: "Boolean",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }, { "name": "@omit", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, sort: {
                    name: "sort",
                    type: "Int",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": 999 }] }],
                }, enabled: {
                    name: "enabled",
                    type: "Boolean",
                    isOptional: true,
                }, count: {
                    name: "count",
                    type: "Json",
                    isOptional: true,
                }, frequency: {
                    name: "frequency",
                    type: "Json",
                    isOptional: true,
                }, groupId: {
                    name: "groupId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'group',
                }, group: {
                    name: "group",
                    type: "HabitGroup",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'children',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "groupId" },
                }, records: {
                    name: "records",
                    type: "HabitRecord",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'habit',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }] }],
        }
        ,
        habitRecord: {
            name: 'HabitRecord', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    isOptional: true,
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, isDeleted: {
                    name: "isDeleted",
                    type: "Boolean",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }, { "name": "@omit", "args": [] }],
                }, date: {
                    name: "date",
                    type: "DateTime",
                }, execList: {
                    name: "execList",
                    type: "Json",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": "[]" }] }],
                }, reason: {
                    name: "reason",
                    type: "String",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, habit: {
                    name: "habit",
                    type: "HabitItem",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'records',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "habitId" },
                }, habitId: {
                    name: "habitId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'habit',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }] }],
        }
        ,
        taskNode: {
            name: 'TaskNode', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    isOptional: true,
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, isDeleted: {
                    name: "isDeleted",
                    type: "Boolean",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }, { "name": "@omit", "args": [] }],
                }, type: {
                    name: "type",
                    type: "String",
                }, data: {
                    name: "data",
                    type: "Json",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }] }],
        }
        ,
        taskEdge: {
            name: 'TaskEdge', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    isOptional: true,
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, isDeleted: {
                    name: "isDeleted",
                    type: "Boolean",
                    isOptional: true,
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }, { "name": "@omit", "args": [] }],
                }, type: {
                    name: "type",
                    type: "String",
                }, source: {
                    name: "source",
                    type: "String",
                }, target: {
                    name: "target",
                    type: "String",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }] }],
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
};
export default metadata;

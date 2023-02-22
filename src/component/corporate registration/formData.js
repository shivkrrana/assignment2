


const formData = [
    {
        label: 'Company Name',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Industry',
        type: 'text',
        validation: {
            required: {
                value: false
            }
        }
    },
    {
        label: 'Mail ID',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            },
            pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'please enter a valid e-mail address'
            }
        }
    },
    {
        label: 'Phone Number',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            },
            pattern: {
                value: /^\d{10}$/,
                message: 'please enter a valid 10-digit phone number'
            }
        }
    },
    {
        label: 'Location',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Website',
        type: 'text',
        validation: {
            required: {
                value: false
            }
        }
    },
    {
        label: 'Working Hours',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Establishment Date',
        type: 'date',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Initial Capital',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Representative',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Branch',
        type: 'text',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Number Of Employees',
        type: 'number',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Sales Revenue',
        type: 'number',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Operation Profit',
        type: 'number',
        validation: {
            required: {
                value: true,
                message: 'This Field is Required'
            }
        }
    },
    {
        label: 'Avrage Age Of Employees',
        type: 'number',
        validation: {
            required: {
                value: false
            }
        }
    },
    {
        label: 'Stock',
        type: 'number',
        validation: {
            required: {
                value: false
            }
        }
    },
    {
        label: 'Linkedin Link',
        type: 'text',
        validation: {
            required: {
                value: false
            },
            pattern: {
                value: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
                message: 'Please Enter valid Link'
            }
        }
    },
    {
        label: 'Twitter Link',
        type: 'text',
        validation: {
            required: {
                value: false
            },
            pattern: {
                value: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
                message: 'Please Enter valid Link'
            }
        }
    },
    {
        label: 'Facebook Link',
        type: 'text',
        validation: {
            required: {
                value: false
            },
            pattern: {
                value: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
                message: 'Please Enter valid Link'
            }
        }
    },
    {
        label: 'Instagram Link',
        type: 'text',
        validation: {
            required: {
                value: false
            },
            pattern: {
                value: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
                message: 'Please Enter valid Link'
            }
        }
    },
    {
        label: 'Youtube Link',
        type: 'text',
        validation: {
            required: {
                value: false
            },
            pattern: {
                value: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
                message: 'Please Enter valid Link'
            }
        }
    },
]
export default formData;
import React, { useState } from 'react'

export default function Review() {
    const [abc, abcd] = useState(0)
    const [data, reviews] = useState([
        {
            id: 1,
            name: 'susan smith',
            job: 'web developer',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
            id: 2,
            name: 'anna johnson',
            job: 'web designer',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            text:
                'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
            id: 3,
            name: 'peter jones',
            job: 'intern',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            text:
                'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
            id: 4,
            name: 'bill anderson',
            job: 'the boss',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
                'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
    ])
    const add = () => {
        if (abc < data.length - 1) {
            abcd(abc + 1)
        }
        else {
            abcd(0)

        }
    }
    const remove = () => {
        if (abc <= 0) {
            abcd(data.length - 1)
        }
        else{

            abcd(abc-1)
            
        }
    }

    return (
        <div>{
            <div className='container'>
                <div>
                    <img className='photo' src={data[abc].image} alt="" />
                </div>
                <div>
                    <h2>{data[abc].name}</h2>
                </div>
                <div>
                    <h3 className='forjob'>{data[abc].job}</h3>
                </div>
                <div>
                    <p>{data[abc].text}</p>
                </div>
                <div>
                    <button onClick={remove}><i class="far fa-arrow-alt-circle-left"></i></button>
                    <button onClick={add}><i class="far fa-arrow-alt-circle-right"></i></button>
                </div>
            </div>
        }</div>
    )
}

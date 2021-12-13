window.addEventListener('DOMContentLoaded', function () {
    let a = [{ title: `Discovery’s newest<br> property in Kaua’i North<br> Shore Preserve`, desc: `Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.` },
    { title: `James Island<br> Discovery's Newest Property`, desc: `Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.` },
    { title: `CostaTerra<br> Discovery's 23rdproperty`, desc: `Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.` },
    { title: `Troubadour To Open<br> Golf Course Fall 2019`, desc: `Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.` }];

    let count = 0;
    let title = document.getElementById('articletitle')
    let desc = document.getElementById('articledescription')

    title.innerHTML = a[0].title
    desc.innerHTML = a[0].desc

    rightbutton.addEventListener('click', function () {
        if (count < 4) {
            count = count + 1;
            console.log(count);
            if(count==4){
                count=0;
            }
        
        }
        title.innerHTML = a[count].title
        desc.innerHTML = a[count].desc
    })

    leftbutton.addEventListener('click', function () {
        if (count == 0) {
            count = a.length - 1;
        }
        else if (count > 0) {
            count = count - 1;
        }
        title.innerHTML = a[count].title
        desc.innerHTML = a[count].desc
    })
    
    
    const section_left_btn = document.getElementById('section-left-btn')
    const section_right_btn = document.getElementById('section-right-btn')

    const div1_text = document.getElementById('div1-context')
    const div1_author = document.getElementById('div1-author')

    const div2_text = document.getElementById('div2-context')
    const div2_author = document.getElementById('div2-author')

    const div3_text = document.getElementById('div3-context')
    const div3_author = document.getElementById('div3-author')

    const div4_text = document.getElementById('div4-context')
    const div4_author = document.getElementById('div4-author')


    let contextArray = [
        [{ text1: ` 10 Fairways to Tee Off on now `, author1: ` Vegas Magazine | September, 2021 ` },
        { text2: ` Golf Real Estate Roars Back as <br>Vacation Homes Boom in Pandemic `, author2: ` Bloomberg | September, 2021 ` },
        { text3: ` Brexit drives British millionaires to <br>Portugal for tax and EU perks - but <br>it's about to get complicated `, author3: ` Telegraph UK |  August 20, 2021 ` },
        { text4: ` This Property Company Ups the Ante <br>with Luxury and Sustainability `, author4: ` Sunset Magazine | August 13 2021 ` }
        ],
        [{ text1: ` Where Sun, Sand and Splendor Are<br> Still to Be Discovered `, author1: ` New York Times | June 9, 2021 ` },
        { text2: ` Mike Meldman is one of the most<br> influential real-estate moguls in the <br>country thanks to his luxurious live-in<br>resorts, which became irresistible to<br> the rich and famous during the pandemic `, author2: ` Business Insider | June 4, 2021 ` },
        { text3: ` There's a real buy-in for resort <br>communities offering amusement and<br> amenities `, author3: ` Luxury Magazine | Spring/Summer, 2021 ` },
        { text4: ` This Blue chip Caribbean Island<br> Hopes to Dethrone St. Barts `, author4: ` New York Post | April 5, 2021 ` }
        ],
        [{ text1: ` No longer Waiting for Retirement `, author1: ` New York Times International Homes | March 27-28, 2021 ` },
        { text2: ` Golf and Pickleball are Having a Love<br> Affair `, author2: ` New York Times | March 22, 2021 ` },
        { text3: ` For Many, the Pandemic Has Led to<br> the 'Discovery' of Golf `, author3: ` New York Times | March 22, 2021 ` },
        { text4: ` Celebrities Keep Flocking to<br> Discovery Resorts During the<br> Pandemic. Here's Why `, author4: ` Elle Decor | September 2020 ` }]
    ]

    let arr_count = 0

    div1_text.innerHTML = contextArray[0][0].text1
    div1_author.innerHTML = contextArray[0][0].author1
    div2_text.innerHTML = contextArray[0][1].text2
    div2_author.innerHTML = contextArray[0][1].author2
    div3_text.innerHTML = contextArray[0][2].text3
    div3_author.innerHTML = contextArray[0][2].author3
    div4_text.innerHTML = contextArray[0][3].text4
    div4_author.innerHTML = contextArray[0][3].author4
    
    section_left_btn.addEventListener('click', function () {
        if (arr_count == 0) {
            arr_count = contextArray.length - 1;
        }
        else if (arr_count > 0) {
            arr_count = arr_count - 1;
       }
        div1_text.innerHTML = contextArray[arr_count][0].text1
        div1_author.innerHTML = contextArray[arr_count][0].author1
        div2_text.innerHTML = contextArray[arr_count][1].text2
        div2_author.innerHTML = contextArray[arr_count][1].author2
        div3_text.innerHTML = contextArray[arr_count][2].text3
        div3_author.innerHTML = contextArray[arr_count][2].author3
        div4_text.innerHTML = contextArray[arr_count][3].text4
        div4_author.innerHTML = contextArray[arr_count][3].author4

    })

    section_right_btn.addEventListener('click', function () {
        if (arr_count < 3) {
            arr_count = arr_count + 1;
            if(arr_count==3){
                arr_count=0;
            }
        }
        div1_text.innerHTML = contextArray[arr_count][0].text1
        div1_author.innerHTML = contextArray[arr_count][0].author1
        div2_text.innerHTML = contextArray[arr_count][1].text2
        div2_author.innerHTML = contextArray[arr_count][1].author2
        div3_text.innerHTML = contextArray[arr_count][2].text3
        div3_author.innerHTML = contextArray[arr_count][2].author3
        div4_text.innerHTML = contextArray[arr_count][3].text4
        div4_author.innerHTML = contextArray[arr_count][3].author4

    })
console.log($);
})



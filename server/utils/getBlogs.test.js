const blogs = [{
    'title': 'Why Deno will stop using TypeScript',
    'url': 'https://startfunction.com/deno-will-stop-using-typescript/',
    'author': 'NicoJuicy',
    'story_id': '23592483',
    'created_at': '2020-06-21T16:41:34.000Z',
    'created_at_i': 1592757694,
    'id': '5ef042f0b38360001266606b'
},
{
    'title': 'Why is it important for a matrix to be square? (2018)',
    'url': 'https://math.stackexchange.com/a/2811960/18947',
    'author': 'anonytrary',
    'story_id': '23591553',
    'created_at': '2020-06-22T00:21:27.000Z',
    'created_at_i': 1592785287, 'id': '5ef042f0b38360001266606c'
},
{
    'title': 'FlexBuffers',
    'url': 'https://google.github.io/flatbuffers/flexbuffers.html',
    'author': 'kentonv',
    'story_id': '23588558',
    'created_at': '2020-06-21T18:34:08.000Z',
    'created_at_i': 1592764448,
    'id': '5ef042f0b38360001266606d'
},
{
    'title': 'RSS Box – RSS for websites that do not support RSS',
    'url': 'https://rssbox.herokuapp.com/',
    'author': 'derefr',
    'story_id': '23583629',
    'created_at': '2020-06-21T15:31:54.000Z',
    'created_at_i': 1592753514,
    'id': '5ef042f0b38360001266606e'
},
{
    'title': 'A little bit of plain JavaScript can do a lot',
    'url': 'https://jvns.ca/blog/2020/06/19/a-little-bit-of-plain-javascript-can-do-a-lot/',
    'author': 'EvilTerran',
    'story_id': '23578319',
    'created_at': '2020-06-21T16:47:59.000Z',
    'created_at_i': 1592758079,
    'id': '5ef042f0b38360001266606f'
},
{
    'title': 'Why Apple ditched PowerPC, and what it says about Apple ditching Intel',
    'url': 'https://tedium.co/2020/06/16/apple-powerpc-intel-transition-history/',
    'author': 'wtallis',
    'story_id': '23573215',
    'created_at': '2020-06-21T01:58:49.000Z',
    'created_at_i': 1592704729,
    'id': '5ef042f0b383600012666070'
},
{
    'title': 'Domain-Specific Hardware Accelerators',
    'url': 'https://cacm.acm.org/magazines/2020/7/245701-domain-specific-hardware-accelerators/fulltext',
    'author': 'borramakot',
    'story_id': '23571297',
    'created_at': '2020-06-21T19:25:28.000Z',
    'created_at_i': 1592767528,
    'id': '5ef042f0b383600012666071'
},
{
    'title': 'Show HN: Kumologica – Low-Code Integration Toolkit for Serverless Compute',
    'url': 'https://kumologica.com',
    'author': 'KineticLensman',
    'story_id': '23536740',
    'created_at': '2020-06-21T14:59:31.000Z',
    'created_at_i': 1592751571,
    'id': '5ef042f0b383600012666072'
},
{
    'title': 'Node.js Overload',
    'url': 'https://www.thoughtworks.com/radar/platforms?blipid=202005026',
    'author': 'valand',
    'story_id': '23571377',
    'created_at': '2020-06-19T11:22:10.000Z',
    'created_at_i': 1592565730,
    'id': '5ef043492548af0012d934b6'
},
{
    'title': 'ARM Mac Impact on Intel',
    'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
    'author': 'ryan-allen',
    'story_id': '23597403',
    'created_at': '2020-06-22T06:35:33.000Z',
    'created_at_i': 1592807733,
    'id': '5ef054efc2b35f0011fab7d2'
}]

const flawedBlogs = [{
    'title': null,
    'url': 'https://startfunction.com/deno-will-stop-using-typescript/',
    'author': 'NicoJuicy',
    'story_id': '23592483',
    'created_at': '2020-06-21T16:41:34.000Z',
    'created_at_i': 1592757694,
},
{
    'title': 'Why is it important for a matrix to be square? (2018)',
    'url': null,
    'author': 'anonytrary',
    'story_id': '23591553',
    'created_at': '2020-06-22T00:21:27.000Z',
    'created_at_i': 1592785287, 'id': '5ef042f0b38360001266606c'
},
{
    'title': 'FlexBuffers',
    'url': 'https://google.github.io/flatbuffers/flexbuffers.html',
    'author': null,
    'story_id': '23588558',
    'created_at': '2020-06-21T18:34:08.000Z',
    'created_at_i': 1592764448,
},
{
    'title': 'RSS Box – RSS for websites that do not support RSS',
    'url': 'https://rssbox.herokuapp.com/',
    'author': 'derefr',
    'story_id': null,
    'created_at': '2020-06-21T15:31:54.000Z',
    'created_at_i': 1592753514,
},
{
    'title': 'A little bit of plain JavaScript can do a lot',
    'url': 'https://jvns.ca/blog/2020/06/19/a-little-bit-of-plain-javascript-can-do-a-lot/',
    'author': 'EvilTerran',
    'story_id': '23578319',
    'created_at': null,
    'created_at_i': 1592758079,
},
{
    'title': 'Why Apple ditched PowerPC, and what it says about Apple ditching Intel',
    'url': 'https://tedium.co/2020/06/16/apple-powerpc-intel-transition-history/',
    'author': 'wtallis',
    'story_id': '23573215',
    'created_at': '2020-06-21T01:58:49.000Z',
    'created_at_i': null,
},
{
    'title': 'Domain-Specific Hardware Accelerators',
    'url': 'https://cacm.acm.org/magazines/2020/7/245701-domain-specific-hardware-accelerators/fulltext',
    'author': 'borramakot',
    'story_id': '23571297',
    'created_at': '2020-06-21T19:25:28.000Z',
    'created_at_i': 1592767528,
},
{
    'title': 'Show HN: Kumologica – Low-Code Integration Toolkit for Serverless Compute',
    'url': 'https://kumologica.com',
    'author': 'KineticLensman',
    'story_id': '23536740',
    'created_at': '2020-06-21T14:59:31.000Z',
    'created_at_i': 1592751571,
},
{
    'title': 'Node.js Overload',
    'url': 'https://www.thoughtworks.com/radar/platforms?blipid=202005026',
    'author': 'valand',
    'story_id': '23571377',
    'created_at': '2020-06-19T11:22:10.000Z',
    'created_at_i': 1592565730,
},
{
    'title': 'ARM Mac Impact on Intel',
    'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
    'author': 'ryan-allen',
    'story_id': '23597403',
    'created_at': '2020-06-22T06:35:33.000Z',
    'created_at_i': 1592807733,
}]

const repeatedBlogs = [
    {
        'title': 'ARM Mac Impact on Intel',
        'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
        'author': 'ryan-allen',
        'story_id': '23597403',
        'created_at': '2020-06-22T06:35:33.000Z',
        'created_at_i': 1592807733,
    },
    {
        'title': 'ARM Mac Impact on Intel',
        'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
        'author': 'ryan-allen',
        'story_id': '23597403',
        'created_at': '2020-06-22T06:35:33.000Z',
        'created_at_i': 1592807733,
    },
    {
        'title': 'ARM Mac Impact on Intel',
        'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
        'author': 'ryan-allen',
        'story_id': '23597403',
        'created_at': '2020-06-22T06:35:33.000Z',
        'created_at_i': 1592807733,
    },
    {
        'title': 'ARM Mac Impact on Intel',
        'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
        'author': 'ryan-allen',
        'story_id': '23597403',
        'created_at': '2020-06-22T06:35:33.000Z',
        'created_at_i': 1592807733,
    },
    {
        'title': 'ARM Mac Impact on Intel',
        'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
        'author': 'ryan-allen',
        'story_id': '23597403',
        'created_at': '2020-06-22T06:35:33.000Z',
        'created_at_i': 1592807733,
    },
    {
        'title': 'ARM Mac Impact on Intel',
        'url': 'https://mondaynote.com/arm-mac-impact-on-intel-9641a8e73dca',
        'author': 'ryan-allen',
        'story_id': '23597403',
        'created_at': '2020-06-22T06:35:33.000Z',
        'created_at_i': 1592807733,
    },
]

const rawBlogs = {
    "hits": [{
        "created_at": "2020-06-22T19:28:12.000Z",
        "title": null,
        "url": null,
        "author": "imhoguy",
        "points": null,
        "story_text": null,
        "comment_text": "There is low chance to find a peer in I2P for some already niche material. Tor with clearnet exit nodes is better although still less peers due to NAT.",
        "num_comments": null,
        "story_id": 23602008,
        "story_title": "Show HN: Web3Torrent – Adding Ethereum Micropayments to WebTorrent",
        "story_url": "https://blog.statechannels.org/introducing-web3torrent/",
        "parent_id": 23603905,
        "created_at_i": 1592854092,
        "_tags": ["comment", "author_imhoguy", "story_23602008"],
        "objectID": "23605021",
        "_highlightResult": {
            "author": {
                "value": "imhoguy",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "There is low chance to find a peer in I2P for some already niche material. Tor with clearnet exit \u003cem\u003enodes\u003c/em\u003e is better although still less peers due to NAT.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["nodejs"]
            },
            "story_title": {
                "value":
                    "Show HN: Web3Torrent – Adding Ethereum Micropayments to WebTorrent",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://blog.statechannels.org/introducing-web3torrent/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-06-22T19:03:24.000Z",
        "title": null,
        "url": null,
        "author": "MangoCoffee",
        "points": null,
        "story_text": null,
        "comment_text": "this is a exciting news. i hope Apple\u0026#x2F;AMD can force Intel to step up its game.\u003cp\u003eIntel is losing to AMD\u0026#x27;s Zen and TSMC process nodes.",
        "num_comments": null,
        "story_id": 23603866,
        "story_title": "Apple announces it will switch to its own processors for future Macs",
        "story_url": "https://www.theverge.com/2020/6/22/21295475/apple-mac-processors-arm-silicon-chips-wwdc-2020",
        "parent_id": 23603866,
        "created_at_i": 1592852604,
        "_tags": ["comment", "author_MangoCoffee", "story_23603866"],
        "objectID": "23604471",
        "_highlightResult": {
            "author": {
                "value": "MangoCoffee",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "this is a exciting news. i hope Apple/AMD can force Intel to step up its game.\u003cp\u003eIntel is losing to AMD's Zen and TSMC process \u003cem\u003enodes\u003c/em\u003e.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": ["nodejs"]
            },
            "story_title": {
                "value": "Apple announces it will switch to its own processors for future Macs",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://www.theverge.com/2020/6/22/21295475/apple-mac-processors-arm-silicon-chips-wwdc-2020",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    }],
    "nbHits": 14732,
    "page": 0,
    "nbPages": 50,
    "hitsPerPage": 20,
    "exhaustiveNbHits": false,
    "query": "nodejs",
    "params": "advancedSyntax=true&analytics=true&analyticsTags=backend&query=nodejs",
    "processingTimeMS": 5
}

const {
    parseData,
    orderBlogs,
    normalizeBlogs,
    normalizeData,
} = require('./getBlogs')

describe("functions used to get the blogs from the API", () => {
    test("parseData delivers the right anount of results", async () => {
        const result = await parseData(rawBlogs.hits)
        expect(result).toHaveLength(2)
    })
    test('parseData extracts the right elements from the rawData', async () => {
        const result = await parseData(rawBlogs.hits)
        expect(result[0].title).toBeDefined()
        expect(result[0].url).toBeDefined()
        expect(result[0].author).toBeDefined()
        expect(result[0].story_id).toBeDefined()
        expect(result[0].created_at).toBeDefined()
        expect(result[0].created_at_i).toBeDefined()
        expect(result[0].removed).toBeDefined()
    })
    test("orderBlogs outputs are ordered", () => {
        const result = orderBlogs(blogs)
        const checked = result.reduce((acc, curr) => {
            return {
                result: acc.story_id > parseInt(curr.story_id) && acc.result,
                story_id: parseInt(curr.story_id)
            }
        }, {
            result: true,
            story_id: Number.POSITIVE_INFINITY
        })
        expect(checked.result).toBe(true)
    })
    test("normalizeBlogs output does not contain missing values", () => {
        const result = normalizeBlogs(flawedBlogs)
        expect(result).toHaveLength(4)
    })
    test("normalizeData removes repeated blogs", ()=>{
        const result = normalizeData(repeatedBlogs)
        expect(result).toHaveLength(1)
    })
})

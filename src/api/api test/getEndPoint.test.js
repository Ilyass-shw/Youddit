import { getEndPoint } from "../api";


describe('getEndPoint', ()=>{
    it('should retunr the right end point',()=>{
        const expected=getEndPoint('rock and roll', 'comment')

        expect(expected).toBe('https://www.reddit.com/search.json?q=rock and roll&limit=20&restrict_sr=true&sort=comment&t=all&show=all')
    })
})

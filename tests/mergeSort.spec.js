const Chai = require('chai');
const expect = Chai.expect;
const mergeSort = require('../mergeSort.js');
let merge = require('../mergeSort').merge;

describe('Merge Sort', function(){

    describe('Testing Output',function(){
        it('sorts into ascending order',function(){
            let list = [5,1,3,4,2,0];

            let results = mergeSort.mergeSort(list);

            expect(results).to.eql([0,1,2,3,4,5]);
        });

        it('handles duplicates',function(){
            let list = [5,1,3,4,3,2,2,0];

            let results = mergeSort.mergeSort(list);

            expect(results).to.eql([0,1,2,2,3,3,4,5]);
        });

        it('handles negative values',function(){
            let list = [5,1,3,4,2,0,-1];

            let results = mergeSort.mergeSort(list);

            expect(results).to.eql([-1,0,1,2,3,4,5]);
            expect(results).to.not.eql([0,-1,1,2,3,4,5]);
        });

        it('handles empty arrays - returns empty array',function(){
            let list = [];

            let results = mergeSort.mergeSort(list);

            expect(results).to.eql([]);
        });

        it('removes non-numbers',function(){
            let list = ['string',1,3,5,[1,2],2,4,'string',0];

            let results = mergeSort.mergeSort(list);

            expect(results).to.eql([0,1,2,3,4,5]);
        });

        it('handles Infinity',function(){
            let list = [1,3,5,2,4,Infinity,0];

            let results = mergeSort.mergeSort(list);

            expect(results).to.eql([0,1,2,3,4,5,Infinity]);
        })
    });
});
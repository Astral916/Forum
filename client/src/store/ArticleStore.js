import {makeAutoObservable} from 'mobx';

export default class ArticleStore {
    constructor() {

        this._articles = []

        this._selectedArticle = {}

        makeAutoObservable(this)
    }

    setArticles(articles) {
        this._articles = articles
    }
    
    setSelectedArticle(articles){
        this._articles = articles
    }

    get articles() {
        return this._articles
    }

    get selectedArticle(){
        return this._selectedArticle
    }
}
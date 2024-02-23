import {makeAutoObservable} from "mobx";

export default class Paths {
    constructor(){
        this._path = []
        this._section = []
        this._spk = []

        this._selectedPath = {}
        this._selectedSection = {}
        this._selectedSpk = {}
        makeAutoObservable(this)
    }

    setPath(path){
        this._path = path
    }
    
    setSection(section){
        this._section = section
    }

    setSpk(spk){
        this._spk = spk
    }

    setSelectedPath(selectedPath){
        this._selectedPath = selectedPath
    }

    setSelectedSection(selectedSection){
        this._selectedSection = selectedSection
    }

    setSelectedSpk(selectedSpk){
        this._selectedSpk = selectedSpk
    }

    get path(){
        return this._path
    }

    get section(){
        return this._section
    }

    get spk(){
        return this._spk
    }

    get selectedPath(){
        return this._selectedPath
    }

    get selectedSection(){
        return this._selectedSection
    }

    get selectedSpk(){
        return this._selectedSpk
    }
}
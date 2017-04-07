namespace engine.res {

    var __cache  = {};
    var ASSETS_PATH = "assets/";
    var __imageConfig = {

        "images": [
            { name: "wander-icon.jpg", width: 180, height: 180 },
            { name: "S_Watcher.png", width: 190, height: 190 },
        ]

    };


    export function loadConfig() {
        var length = __imageConfig.images.length;

        __imageConfig.images.forEach((config) => {
            
           
           
        });
    }


    export function loadRes(name) {
            var resource = getRes(name);
            resource.load();
        }

        export function getRes(name: string) {
            if (__cache[name]) {
                console.log("same cache !")
                return __cache[name]
            }
            else {
                __cache[name] = new ImageResource(name);
                return __cache[name];
            }
        }

        export class ImageResource {

            private url: string;

            bitmapData: HTMLImageElement;

            width: number;

            height: number;

            constructor(name: string) {
                this.bitmapData = document.createElement("img");
                this.bitmapData.src = "Close_s.png";
                this.url = ASSETS_PATH + name;
            }

            public load() {
                var realResource = document.createElement("img");
                realResource.src = this.url;
                realResource.onload = () => {
                    this.bitmapData = realResource;
                    console.log(realResource.src  + "Has Loaded")
                }
            }
            
        }

    }
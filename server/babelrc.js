import path from "path";
import jsconfig from "./jsconfig.json"

export default {
    presets: ['@babel/preset-env'],
    plugins: [
        ['module-resolve',
            {root: [path.resolve(jsconfig.compilerOptions.baseUrl)]}
        ]
    ]
}
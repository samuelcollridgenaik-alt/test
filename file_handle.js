import fs from "fs"

const inputFile = "input.txt"
const outputFile = "output.txt"

fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err)
        return
    }

    console.log("File contents:")
    console.log(data)

    fs.writeFileSync(outputFile, data, "utf8", (err) => {
        if (err) {
            console.error("Error writing file:", err)
            return
        }

        console.log("File copied successfully!")
    })
    fs.appendFile(outputFile, "\nThis line was appended.", "utf8", (err) => {
        if (err) {
            console.error("Error appending to file:", err)
            return
        }

        console.log("Data appended successfully!")
    })
})

const data = fs.readFileSync(inputFile, "utf8")
console.log(data)
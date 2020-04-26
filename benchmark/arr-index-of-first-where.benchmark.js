import fs from 'fs-extra'
import hirestime from 'hirestime'
import path from 'path'
import arrIndexOfFirstWhere from '../src/arr-index-of-first-where'

async function main() {
	const md = ['## Benchmark']

	// start timer
	const getElapsed = hirestime()

	// benchmark
	arrIndexOfFirstWhere(undefined)

	// push results
	md.push(getElapsed.nanoseconds() + ' nanoseconds')

	// write results to file
	fs.writeFileSync(
		path.join(process.cwd(), 'benchmark', 'results.md'),
		md.join('\n'),
	)
}

//main()

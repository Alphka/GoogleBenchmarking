import type { NextPage } from "next"
import { useEffect, useReducer, useState } from "react"
import style from "../styles/Home.module.scss"
import Head from "next/head"

const regions = {
	"asia-east1": {
		Region: "asia-east1",
		RegionName: "Taiwan",
		URL: "https://asia-east1-5tkroniexa-de.a.run.app"
	},
	"asia-east2": {
		Region: "asia-east2",
		RegionName: "Hong Kong",
		URL: "https://asia-east2-5tkroniexa-df.a.run.app"
	},
	"asia-northeast1": {
		Region: "asia-northeast1",
		RegionName: "Tóquio",
		URL: "https://asia-northeast1-5tkroniexa-an.a.run.app"
	},
	"asia-northeast2": {
		Region: "asia-northeast2",
		RegionName: "Osaka",
		URL: "https://asia-northeast2-5tkroniexa-dt.a.run.app"
	},
	"asia-northeast3": {
		Region: "asia-northeast3",
		RegionName: "Seul",
		URL: "https://asia-northeast3-5tkroniexa-du.a.run.app"
	},
	"asia-south1": {
		Region: "asia-south1",
		RegionName: "Bombaim",
		URL: "https://asia-south1-5tkroniexa-el.a.run.app"
	},
	"asia-south2": {
		Region: "asia-south2",
		RegionName: "Délhi",
		URL: "https://asia-south2-5tkroniexa-em.a.run.app"
	},
	"asia-southeast1": {
		Region: "asia-southeast1",
		RegionName: "Cingapura",
		URL: "https://asia-southeast1-5tkroniexa-as.a.run.app"
	},
	"asia-southeast2": {
		Region: "asia-southeast2",
		RegionName: "Jacarta",
		URL: "https://asia-southeast2-5tkroniexa-et.a.run.app"
	},
	"australia-southeast1": {
		Region: "australia-southeast1",
		RegionName: "Sidney",
		URL: "https://australia-southeast1-5tkroniexa-ts.a.run.app"
	},
	"australia-southeast2": {
		Region: "australia-southeast2",
		RegionName: "Melbourne",
		URL: "https://australia-southeast2-5tkroniexa-km.a.run.app"
	},
	"europe-central2": {
		Region: "europe-central2",
		RegionName: "Varsóvia",
		URL: "https://europe-central2-5tkroniexa-lm.a.run.app"
	},
	"europe-north1": {
		Region: "europe-north1",
		RegionName: "Finlândia",
		URL: "https://europe-north1-5tkroniexa-lz.a.run.app"
	},
	"europe-southwest1": {
		Region: "europe-southwest1",
		RegionName: "Madri",
		URL: "https://europe-southwest1-5tkroniexa-no.a.run.app"
	},
	"europe-west1": {
		Region: "europe-west1",
		RegionName: "Bélgica",
		URL: "https://europe-west1-5tkroniexa-ew.a.run.app"
	},
	"europe-west12": {
		Region: "europe-west12",
		RegionName: "Turim",
		URL: "https://europe-west12-5tkroniexa-og.a.run.app"
	},
	"europe-west2": {
		Region: "europe-west2",
		RegionName: "Londres",
		URL: "https://europe-west2-5tkroniexa-nw.a.run.app"
	},
	"europe-west3": {
		Region: "europe-west3",
		RegionName: "Frankfurt",
		URL: "https://europe-west3-5tkroniexa-ey.a.run.app"
	},
	"europe-west4": {
		Region: "europe-west4",
		RegionName: "Países Baixos",
		URL: "https://europe-west4-5tkroniexa-ez.a.run.app"
	},
	"europe-west6": {
		Region: "europe-west6",
		RegionName: "Zurique",
		URL: "https://europe-west6-5tkroniexa-oa.a.run.app"
	},
	"europe-west8": {
		Region: "europe-west8",
		RegionName: "Milão",
		URL: "https://europe-west8-5tkroniexa-oc.a.run.app"
	},
	"europe-west9": {
		Region: "europe-west9",
		RegionName: "Paris",
		URL: "https://europe-west9-5tkroniexa-od.a.run.app"
	},
	"global": {
		Region: "global",
		RegionName: "Global",
		URL: "https://global.gcping.com"
	},
	"me-central1": {
		Region: "me-central1",
		RegionName: "Doha",
		URL: "https://me-central1-5tkroniexa-ww.a.run.app"
	},
	"me-west1": {
		Region: "me-west1",
		RegionName: "Tel Aviv",
		URL: "https://me-west1-5tkroniexa-zf.a.run.app"
	},
	"northamerica-northeast1": {
		Region: "northamerica-northeast1",
		RegionName: "Montreal",
		URL: "https://northamerica-northeast1-5tkroniexa-nn.a.run.app"
	},
	"northamerica-northeast2": {
		Region: "northamerica-northeast2",
		RegionName: "Toronto",
		URL: "https://northamerica-northeast2-5tkroniexa-pd.a.run.app"
	},
	"southamerica-east1": {
		Region: "southamerica-east1",
		RegionName: "São Paulo",
		URL: "https://southamerica-east1-5tkroniexa-rj.a.run.app"
	},
	"southamerica-west1": {
		Region: "southamerica-west1",
		RegionName: "James",
		URL: "https://southamerica-west1-5tkroniexa-tl.a.run.app"
	},
	"us-central1": {
		Region: "us-central1",
		RegionName: "Iowa",
		URL: "https://us-central1-5tkroniexa-uc.a.run.app"
	},
	"us-east1": {
		Region: "us-east1",
		RegionName: "South Carolina",
		URL: "https://us-east1-5tkroniexa-ue.a.run.app"
	},
	"us-east4": {
		Region: "us-east4",
		RegionName: "North Virginia",
		URL: "https://us-east4-5tkroniexa-uk.a.run.app"
	},
	"us-east5": {
		Region: "us-east5",
		RegionName: "Colombo",
		URL: "https://us-east5-5tkroniexa-ul.a.run.app"
	},
	"us-south1": {
		Region: "us-south1",
		RegionName: "Dallas",
		URL: "https://us-south1-5tkroniexa-vp.a.run.app"
	},
	"us-west1": {
		Region: "us-west1",
		RegionName: "Oregon",
		URL: "https://us-west1-5tkroniexa-uw.a.run.app"
	},
	"us-west2": {
		Region: "us-west2",
		RegionName: "Los Angeles",
		URL: "https://us-west2-5tkroniexa-wl.a.run.app"
	},
	"us-west3": {
		Region: "us-west3",
		RegionName: "Salt Lake City",
		URL: "https://us-west3-5tkroniexa-wm.a.run.app"
	},
	"us-west4": {
		Region: "us-west4",
		RegionName: "Las Vegas",
		URL: "https://us-west4-5tkroniexa-wn.a.run.app"
	}
} as const

const title = "Abadar - Benchmarking"
const description = "Teste o tempo de resposta dos servidores da Google."
const canonical = new URL("https://benchmarking-nine.vercel.app")
const thumbnail = new URL("/images/benchmark.png", canonical).href

type Regions = typeof regions[keyof typeof regions]["Region"]
type RegionNames = typeof regions[keyof typeof regions]["RegionName"]

interface ServerInfo {
	Region: Regions
	RegionName: RegionNames
	Latency: number
}

const servers = new Array<ServerInfo>

function GetLatencyColor(latency: number){
	const minLatency = Math.min(...servers.map(({ Latency }) => Latency))

	return latency < minLatency + 100
		? "#44ce1b"
		: latency < minLatency + 200
			? "#bbdb44"
			: latency < minLatency + 300
				? "#f7e379"
				: latency < minLatency + 400
					? "#f2a134"
					: "#e51f1f"
}

const Home: NextPage = () => {
	const [running, setRunning] = useState(false)
	const [, forceUpdate] = useReducer(x => x + 1, 0)

	useEffect(() => {
        document.body.style.overflowY = "scroll"
    }, [])

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={canonical.href} />
				<meta property="og:url" content={canonical.href} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={thumbnail} />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="twitter:domain" content={canonical.hostname} />
				<meta property="twitter:url" content={canonical.href} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={thumbnail} />
			</Head>

			<main className={style.container}>
				{servers.length ? (
					<ul className={style.list}>
						{servers.map(({ Region, RegionName, Latency }) => (
							<li key={Region} id={Region}>
								<span className={style.region_name}>{RegionName} <span className={style.region}>({Region})</span></span>
								<span className={style.latency} style={{ color: GetLatencyColor(Latency) }}>{Latency} ms</span>
							</li>
						))}
					</ul>
				) : null}

				<button className={style.start} onClick={async event => {
					if(event.currentTarget.disabled || running) return

					servers.splice(0, servers.length)
					setRunning(true)

					const promises = new Array<Promise<void>>

					Object.values(regions).forEach(({ Region, RegionName, URL: url }) => {
						const time = Date.now()

						promises.push(fetch(new URL("/api/ping", url), {
							headers: { Accept: "*/*" },
							cache: "no-cache",
							mode: "cors"
						}).then(response => {
							if(!response.ok) return console.error("Request failed:", url)

							servers.push({ Region, RegionName, Latency: Date.now() - time })
							servers.sort((a, b) => a.Latency - b.Latency)

							forceUpdate()
						}))
					})

					await Promise.all(promises)

					setRunning(false)
				}} disabled={running}>{running ? "Calculando" : "Iniciar"}</button>
			</main>
		</>
	)
}

export default Home

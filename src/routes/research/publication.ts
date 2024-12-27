export interface Publication {
	authors: {
		last: string;
		initials: string;
		isMe?: boolean;
	}[];
	title: string;
	year?: number;
	journal?: {
		title: string;
		volume?: number;
		issue?: number;
		pageRange?: {
			start: number;
			end: number;
		};
		doi: string;
	};
}

const ME = { last: 'Do', initials: 'H.H.', isMe: true };
const SHARON = { last: 'Wolf', initials: 'S.' };
const DANA = { last: 'McCoy', initials: 'D.C.' };
const DR_WIDOM = { last: 'Widom', initials: 'C.S.' };

export const PUBLICATIONS_PEER_REVIEWED: Publication[] = [
	{
		authors: [ME, DR_WIDOM],
		year: 2024,
		title:
			'Childhood Maltreatment, Social Connectedness, and Depression: A Prospective Analysis of Trajectories over Time',
		journal: {
			title: 'Developmental Psychology',
			doi: '10.1037/dev0001836'
		}
	},
	{
		authors: [ME, DANA],
		title:
			'The Relations between Caregiver Education, Home Stimulation, and Children’s Developmental Outcomes: Research in Majority World Countries',
		year: 2024,
		journal: {
			title: 'International Journal of Early Childhood',
			doi: '10.1007/s13158-024-00398-x'
		}
	},
	{
		authors: [
			DR_WIDOM,
			ME,
			{ last: 'Miller', initials: 'Q.C.' },
			{ last: 'Javakhishvili', initials: 'M.' },
			{ last: 'Indik', initials: 'C.E.' },
			{ last: 'Belsky', initials: 'D.W.' }
		],
		title:
			'Childhood Maltreatment and Biological Aging in Middle Adulthood: The Role of Psychiatric Symptoms',
		year: 2024,
		journal: {
			title: 'Biological Psychiatry: Global Open Science',
			volume: 4,
			issue: 5,
			pageRange: { start: 100, end: 341 },
			doi: '10.1016/j.bpsgos.2024.100341'
		}
	},
	{
		authors: [DR_WIDOM, { last: 'Courtney', initials: 'K.' }, ME],
		title:
			'Pathways to Homelessness: Childhood Maltreatment and Psychiatric Symptoms Increase Risk of Homelessness',
		year: 2024,
		journal: {
			title: 'The American Journal of Psychiatry',
			volume: 181,
			issue: 12,
			pageRange: { start: 1103, end: 1111 },
			doi: '10.1176/appi.ajp.20230649'
		}
	},
	{
		authors: [
			DR_WIDOM,
			ME,
			{ last: 'Lynch', initials: 'K.S.' },
			{ last: 'Manly', initials: 'J.J.' }
		],
		title:
			'Childhood Maltreatment and Dementia Risk Factors in Midlife: A Prospective Investigation',
		year: 2023,
		journal: {
			title: 'Current Alzheimer Research',
			volume: 20,
			issue: 9,
			pageRange: { start: 636, end: 647 },
			doi: '10.2174/0115672050281539231222071355'
		}
	}
];

export const PUBLICATIONS_MANUSCRIPT: Publication[] = [
	{
		authors: [ME, SHARON, { last: 'Aurino', initials: 'E.' }],
		title:
			'Child Development Post-COVID-19 School Closures in Ghana: The Roles of Remote Learning Experiences, Caregiver Stimulation, and Teacher’s Pedagogical Knowledge'
	},
	{
		authors: [ME, { last: 'Fu', initials: 'Y.' }, SHARON],
		title:
			'Duration of Exposure to Home and School Physical Punishment and Child Development: Evidence from Ghana'
	},
	{
		authors: [
			{ last: 'Kumar', initials: 'A.' },
			{ last: 'Bloomfield', initials: 'J.L.' },
			ME,
			{ last: 'Cid', initials: 'A.' },
			{ last: 'Lichand', initials: 'G.' },
			SHARON
		],
		title:
			'Sociodemographic Predictors of Depression Among Economically Vulnerable Mothers in Urban Uruguay'
	},
	{
		authors: [ME, { last: 'Chen', initials: 'S.' }, { last: 'Nguyen', initials: 'K.' }],
		title:
			'Family determinants to children’s language development: A longitudinal study in rural China'
	}
];

import React from 'react'
import { Timeline } from '../components/Timeline'

import MessageBoxesLayout from '../../year1/components/MessageBoxesLayout' // '../components/MessageBoxesLayout'
import ImportMessages from '../../year2/components/ImportMessages' // '../components/ImportMessages'
import MessageBoxesWithFlags from '../components/MessageBoxesWithFlags'
import classesH from '../components/Headings.module.scss'

export default function Elira (): JSX.Element {
  const firstName = 'Elira'
  const firstNameLower = firstName.toLowerCase()

  return (
    <>
      <div>
        <h1 className={classesH.elira}>
          <span>Happy</span> <span>2nd</span> <span>Anniversary</span><br /><span>Elira!</span>
        </h1>
      </div>

      <Timeline memories={[
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2022, 5, 16),
          title: 'Elira covers Shoujo Rei',
          videoId: 'DSSAL2b1VR4'
        }, {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2022, 6, 21),
          title: "Elira's 1st ASMR",
          videoId: 'YW15yeTBsSY'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2022, 9, 1),
          title: 'Elira begins Xenoblade Chronicles 3',
          videoId: '7DW5GGLq_HM'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2022, 9, 3),
          title: 'Elira watches The Lord of the Rings',
          videoId: 'YBLI4Q-Zpl8'
        },
        {
          type: 'twitter',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2022, 10, 5),
          title: 'Elira reaches 500K subscribers',
          messagepart1: 'Elira',
          messagepart2: 'reached 500K subscribers',
          tweetUrl: 'https://twitter.com/EliraPendora/status/1577788509771137025'
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          member: 'elira',
          date: new Date(2022, 10, 13),
          title: 'Elira plays her theme song on trombone',
          videoId: 'gfcraa806v4?start=1075'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2022, 10, 22),
          title: 'Elira plays Outlast',
          videoId: 'HZ1tSjDDZO8'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2022, 12, 27),
          title: "Elira's Smash or Pass Holiday Edition",
          videoId: 'krfuDVk858Q'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2023, 1, 13),
          title: "Elira's 3D reveal",
          videoId: 'Bdln23Ph6A8'
        },
        {
          type: 'youtube',
          submitterName: 'Bradon Johns',
          member: 'elira',
          date: new Date(2023, 2, 12),
          title: 'Elira covers Plastic Love',
          videoId: 'P8gnsD2qpb4'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2023, 3, 4),
          title: "Elira's 1st karaoke of 2023",
          videoId: 'YKYkG_hmibY'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2023, 3, 8),
          title: 'Elira gets a girlfriend (in Persona 5)',
          videoId: '3MKpRbqHXjU?start=3662'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2023, 4, 1),
          title: "Elira's 1st at home 3D stream",
          videoId: 'QkFvN4Hm6K0'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2023, 4, 8),
          title: "Elira's third outfit reveal",
          videoId: 'Sq-2CNx4UWU'
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          member: 'elira',
          date: new Date(2023, 4, 23),
          title: 'Elira organized a NijiEN group watchalong of Twilight.',
          videoId: '4tjdKW5vJd0'
        }

      ]}
      />

      {/* Messages */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enableElira: true })} />
      </MessageBoxesLayout>

      {/* Art */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Art To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enableElira: true, enableArt: true })} />
      </MessageBoxesLayout>
    </>
  )
}

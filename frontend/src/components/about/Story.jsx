import HeroStory from './story/HeroStory'
import StoryTabs from './story/StoryTabs'
import Team from './Team'

export default function Story() {
  return (
    <div className='story-container'>
      <HeroStory />
      <StoryTabs />
      <Team />
    </div>
  )
}

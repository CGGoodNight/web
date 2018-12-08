import React from 'react';
import HomeHeader from './HomeHeader';
import HomeFix from './HomeFix';
import HomeAd from '../../container/Home/subpage/HomeAd';
import HomeLike from '../../container/Home/subpage/HomeLike';
function HomePage() {
  return <div>
    <HomeHeader></HomeHeader>
    <HomeFix></HomeFix>
    <HomeAd></HomeAd>
    <HomeLike></HomeLike>
  </div>
}

export default HomePage;
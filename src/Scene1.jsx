import { useEffect } from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

const Scene1 = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
			<div style={{ opacity, fontSize: '40px', color: 'black', textAlign: 'center' }}>
				<p>It's 70:00 p.m. on September 1st.</p>
				<p>You told yourself this would be the year you achieve your goals...</p>
			</div>
		</AbsoluteFill>
	);
};

export default Scene1;

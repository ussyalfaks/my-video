import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

const Scene3 = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0' }}>
			<div style={{ opacity, fontSize: '40px', color: 'black', textAlign: 'center' }}>
				<p>Part 2: You’re Probably Confused</p>
				<p>Most people don't know what to do because they don't know what they want.</p>
				<p>To get out of this stage, enter the Zone: a state of extreme concentration.</p>
			</div>
		</AbsoluteFill>
	);
};

export default Scene3;

import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

const Scene2 = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
			<div style={{ opacity, fontSize: '40px', color: 'black', textAlign: 'center' }}>
				<p>Part 1: You’re Distracted</p>
				<p>We all can agree that focus is vital for building something great.</p>
				<p>But if your brain is wired to need over-stimulation, how do you expect to stay focused?</p>
			</div>
		</AbsoluteFill>
	);
};

export default Scene2;

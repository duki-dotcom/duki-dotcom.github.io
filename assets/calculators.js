const NONVIP_RATE = 15;
const VIP_RATE = 45;
const POINT_CYCLE = [100, 170, 250, 400, 700];

function calculateGalleons(current, target, isVIP) {
    if (target <= current) return null;

    const needed = target - current;
    const rate = isVIP ? VIP_RATE : NONVIP_RATE;
    const intervals = Math.ceil(needed / rate);
    const totalMinutes = intervals * 5;

    return {
        needed,
        hours: Math.floor(totalMinutes / 60),
        mins: totalMinutes % 60,
        intervals
    };
}

function calculatePoints(current, target, lastStage) {
    if (target <= current) return null;

    let total = current;
    let claims = 0;
    let idx = lastStage;

    while (total < target) {
        total += POINT_CYCLE[idx % 5];
        idx++;
        claims++;
    }

    const totalHours = claims * 18;

    return {
        claims,
        days: Math.floor(totalHours / 24),
        hours: totalHours % 24,
        final: total
    };
}

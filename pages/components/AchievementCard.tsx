import Image from 'next/image';

interface AchievementDetail {
    title: string;
    desc: string;
    date: string;
    image: string;
}

interface AchievementCardProps {
    ach : AchievementDetail;
    layout: boolean;
}

const AchievementCard = (props: AchievementCardProps) => {

    const {layout, ach} = props;

    return (
        <div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 mb-12 relative">
                <h1 className={`text-slate-900 text-4xl font-semibold my-auto mx-auto mb-4 ${layout ? "absolute right-10" : ""} hidden lg:block`}>{ach.date}</h1>
                <Image src={`/img/${ach.image}`}
                width="384px"
                height="224px"
                className="rounded-lg mx-auto"
                />
                <div className="description my-auto mx-4">
                    <h1 className="font-bold text-lg text-slate-300 my-2">{ach.title}</h1>
                    <p className="text-base text-slate-300">{ach.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;
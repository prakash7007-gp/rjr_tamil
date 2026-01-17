import {
    Calendar,
    Users,
    BarChart3,
    FlaskConical,
} from "lucide-react";

interface StatsProps {
    data: {
        icon: string;
        value: string;
        label: string;
    }[];
}

export default function StatsSection({ data }: StatsProps) {
    const iconMap: any = {
        calendar: Calendar,
        users: Users,
        "bar-chart": BarChart3,
        flask: FlaskConical,
    };

    return (
        <section className="bg-[#c22220] py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">
                {data.map((stat, index) => {
                    const IconComp = iconMap[stat.icon];

                    return (
                        <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 text-white">
                            <IconComp size={32} strokeWidth={1.2} className="text-yellow-400 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">{stat.value}</h3>

                            <p className="text-xs sm:text-sm lg:text-base xl:text-lg opacity-90 leading-tight">{stat.label}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

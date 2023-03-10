function scheduleHtmlParser(html) {
    let result = [];

    $("tbody tr").each(function () {
        $(this).children("td").filter(function () {
            return $(this).attr("class") == "td";
        }).map(function (index) {
            return {
                day: index + 1,
                classHtmls: $(this).find("div")
            }
        }).filter(function () {
            return !(this.classHtmls.length == 1 && !$(this.classHtmls[0]).text().trim()); // 没课
        }).each(function () {
            let day = this.day;

            this.classHtmls.each(function () {
                let classProperty = $(this).html().split("<br>").map(function (item) {
                    return $('<div/>').html(item).text().trim();
                });
                if (classProperty.length != 4) {
                    return;
                }

                let classItem = {
                    name: classProperty[0],
                    teacher: classProperty[1],
                    position: classProperty[3],

                    day: day,

                    sections: [],
                    weeks: []
                };

                classProperty[2].split("[")[0].split(",").forEach(function (week1, i1) { // 5,7,9,13-16,1-18 单,1-18 双
                    if (week1.indexOf("-") != -1) { // 13-16
                        let dan = week1.indexOf("单") !== -1;
                        let shuang = week1.indexOf("双") !== -1;
                        week1 = week1.replace("单", "").replace("双", "");
                        for (let week = Number(week1.split("-")[0]); week <= Number(week1.split("-")[1]); week++) {
                            if (dan) {
                                if (week % 2 !== 0) {
                                    classItem.weeks.push(week);
                                }
                            } else if (shuang) {
                                if (week % 2 === 0) {
                                    classItem.weeks.push(week);
                                }
                            } else {
                                classItem.weeks.push(week);
                            }
                        }
                    } else {
                        classItem.weeks.push(Number(week1));
                    }
                })

                let sectionRange = classProperty[2].split("[")[1].replace("]", "");
                if (sectionRange.startsWith("傍晚")) {
                    // 将周教处理为晚上第一节课
                    classItem.sections.push({
                        section: 9
                    });
                } else {
                    for (var section = Number(sectionRange.split("-")[0]); section <= Number(sectionRange.split("-")[1]); section++) {
                        classItem.sections.push({
                            section: section
                        });
                    }
                }
                const dataStr = JSON.stringify(classItem);
                if (!result.some(item => JSON.stringify(item) === dataStr)) {
                    result.push(classItem);
                }
            })

        })
    })

    return result;
}

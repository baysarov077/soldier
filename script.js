const soldier = {
    name: 'Ghost',
    helth: 10,
    gun: {
        gunName: 'Ak-47',
        clip: 30
    },
    ammo: 5,
    shoot(){
        if(this.gun.clip === 0) {
            return 'Обойма пуста. Перезарядитесь'
        } else {
        this.gun.clip = this.gun.clip - 1
        return 'Бах-бах'
        }
    },
    recharge(){
        this.gun.clip = 30
        this.ammo = this.ammo - 1
        if(this.ammo <= 0) {
            return ('Не осталось припасов')
        } else {
            return 'перезарядка'
        }
    },
    injury(){
        this.helth = this.helth - 1
        if(this.helth == 0) {
            console.log('Вы мертвы') 
        }
    }
}

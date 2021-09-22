> Given a signed 32-bit integer x, 
> return x with its digits reversed. 
> If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
> then return 0.


``` python
class Solution:
    def reverse(self, x: int) -> int:
        v = str(abs(x))[::-1]
        if x != 0 and int(v) < (2 ** 31 -1) :
            if v[0] == 0 :
                v = v[1:]
            if x < 0 :
                v = "-"+v
        else :
            v = "0"
        return int(v)
```

개어렵다. 12번만에 풀었는데 하위 90퍼... 갈 길이 멀다!
